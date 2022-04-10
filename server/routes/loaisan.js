const express = require('express');

const app = express();
const router = express.Router();
let sanModel = require("../models/San");
let loaisanModel = require("../models/Loaisan");

//create
router.route('/add').post(function (req, res) {
  let loaisan = new loaisanModel(req.body);
  loaisan.save()
    .then(() => {
      res.status(200).json({ 'loaisan': 'Thêm loại sân thành công!' });
    })
    .catch(err => {
      res.status(400).send("Sai thông tin!");
    });
});

//update
router.route('/update/:id').put(function (req, res) {
  loaisanModel.findById(req.params.id, function (err, loaisan) {
    if (!loaisan)
      return next(new Error('Không tìm thấy id loại sân'));
    else {
      loaisan.tenloaisan = req.body.tenloaisan;
      loaisan.soluongnguoi = req.body.soluongnguoi;
      loaisan.gia = req.body.gia;

      loaisan.save().then(emp => {
        res.json('Loại sân update thành công!');
      })
        .catch(err => {
          res.status(400).send("Không thể update loại sân");
        });
    }
  });
});

//delete
router.route('/delete/:id').delete(function (req, res) {
  sanModel.find({LoaiSan: req.params.id }).remove().exec();
  loaisanModel.findByIdAndRemove({ _id: req.params.id }, function (err, deletedloaisan) {
    if (err) res.json(err);
    else res.json({
      message: 'Xóa thành công!',
      loaisan: deletedloaisan
    });
  });
});


//get all loaisan
router.route('/').get(function (req, res) {
  loaisanModel.find(function (err, loaisan) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(loaisan);
    }
  });
});

//get byid loaisan
router.route('/:id').get(function (req, res) {
  let id = req.params.id;
  loaisanModel.findById(id, function (err, loaisan) {
    res.json(loaisan);
  });
});


module.exports = router; 