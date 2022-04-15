const express = require('express');
const router = express.Router();
let sanModel = require("../models/San");

//create
router.route('/add').post(function (req, res) {
    const { TenSan, LoaiSan } = req.body;

    let newSan = new sanModel(
        {
            TenSan,
            TinhTrang: 'Đang hoạt động',
            LoaiSan
        }
    );
    newSan.save()
        .then(() => {
            sanModel
                .populate(newSan, { path: "LoaiSan" })
                .then(san => {
                    res.status(200).json({
                        'message': 'Đã thêm sân thành công!',
                        san: san
                    });
                })
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

//update
router.route('/update/:id').put(function (req, res) {
    sanModel.findById(req.params.id, function (err, san) {
        if (!san)
            return next(new Error('Không tìm được sân'));
        else {
            san.TenSan = req.body.TenSan;
            san.TinhTrang = req.body.TinhTrang;
            san.LoaiSan = req.body.LoaiSan;

            san.save().then(san => {
                res.json('San Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Loaisan");
                });
        }
    });
});

//delete
router.route('/delete/:id').delete(function (req, res) {
    sanModel.findByIdAndRemove({ _id: req.params.id }, function (err, deletedSan) {
        if (err) res.json(err);
        else res.json({
            message: 'Delete success!',
            san: deletedSan
        });
    });
});

//get all san
router.route('/').get(async function (req, res) {
    const idLoaiSan = req.query.idloaisan;
    try {
        let san;
        if (idLoaiSan) {
            san = await sanModel.find({ LoaiSan: idLoaiSan }).populate('LoaiSan');
            res.json(san);
        } else {
            san = await sanModel.find().populate('LoaiSan');
            res.json(san);
        }
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
});

//get by id
router.route('/:id').get(function (req, res) {
    let id = req.params.id;
    sanModel.findById(id).populate('LoaiSan').
        exec()
        .then(san => {
            res.json(san)
        })
        .catch(err => {
            res.json(err)
        });
});

module.exports = router;