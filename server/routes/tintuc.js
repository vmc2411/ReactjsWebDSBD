const express = require('express');

const app = express();
const router = express.Router();
let tintucModel = require("../models/Tintuc");

//create
router.route('/add').post(function (req, res) {
    const { TieuDe, NoiDung, LoaiTinTuc, User } = req.body;

    let newTinTuc = new tintucModel(
        {
            TieuDe,
            NoiDung,
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

//get all tintuc
router.route('/').get(async function (req, res) {
    const idLoaiTinTuc = req.query.idloaitintuc;
    try {
        let tintuc; 
        if (idLoaiTinTuc) {
             tintuc = await tintucModel.find({LoaiTinTuc: idLoaiTinTuc}).populate('LoaiTinTuc').populate('User');
            res.json(tintuc);
        } else {
             tintuc = await tintucModel.find().populate('LoaiTinTuc').populate('User');
            res.json(tintuc);
        }
      
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