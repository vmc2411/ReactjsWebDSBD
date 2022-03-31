const express = require('express');

const app = express();
const router = express.Router();
let tintucModel = require("../models/Tintuc");

//create
router.route('/add').post(function (req, res) {
    const { TieuDe, NoiDung, NgayLap, LoaiTinTuc, User } = req.body;

    let newTinTuc = new tintucModel(
        {
            TieuDe,
            NoiDung,
            NgayLap,
            LoaiTinTuc, 
            User
        }
    );
    newTinTuc.save()
        .then(() => {
            tintucModel
                .populate(newTinTuc, { path: "LoaiTintuc" })
                .then(tintuc => {
                    res.status(200).json({
                        'message': 'Đã thêm tin tức thành công!',
                        tintuc: tintuc
                    });
                })
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

//update
router.route('/update/:id').put(function (req, res) {
    tintucModel.findById(req.params.id, function (err, tintuc) {
        if (!tintuc)
            return next(new Error('Không tìm được tin tuc'));
        else {
            tintuc.TieuDe = req.body.TieuDe;
            tintuc.NoiDung = req.body.NoiDung;
            tintuc.NgayLap = req.body.NgayLap;
            tintuc.LoaiTinTuc = req.body.LoaiTinTuc;
            tintuc.User = req.body.User;

            tintuc.save().then(tintuc => {
                res.json('Tin tức Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Loaitintuc");
                });
        }
    });
});

//delete
router.route('/delete/:id').delete(function (req, res) {
    tintucModel.findByIdAndRemove({ _id: req.params.id }, function (err, deletedTintuc) {
        if (err) res.json(err);
        else res.json({
            message: 'Delete success!',
            tintuc: deletedTintuc
        });
    });
});

//get all loaitintuc
router.route('/').get(async function (req, res) {
    try {
        const tintuc = await tintucModel.find().populate('Loaitintuc');
        res.json(tintuc);
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
});

//get byid loaitintuc
router.route('/:id').get(function (req, res) {
    let id = req.params.id;
    tintucModel.findById(id, function (err, tintuc) {
        if (err) {
            res.json(err);
        }
        res.json(tintuc);
    });
});

module.exports = router;