const express = require('express');

const app = express();
const router = express.Router();
let sanModel = require("../models/San");

//create
router.route('/add').post(function (req, res) {
    let san = new sanModel(req.body);
    san.save()
        .then(() => {
            res.status(200).json({ 'san': 'Đã thêm sân thành công!' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
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
    sanModel.findByIdAndRemove({ _id: req.params.id }, function (err, san) {
        if (err) res.json(err);
        else res.json('Loaisan Deleted Successfully');
    });
});


//get all loaisan
router.route('/').get(function (req, res) {
    sanModel.find(function (err, san) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(san);
        }
    });
});

//get byid loaisan
router.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    sanModel.findById(id, function (err, san) {
        res.json(loaisan);
    });
});

module.exports = router;