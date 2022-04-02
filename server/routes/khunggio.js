const express = require('express');

const router = express.Router();
let khunggioModel = require("../models/Khunggio");
//create
router.route('/add').post(function (req, res) {
  let khunggio = new khunggioModel(req.body);
  khunggio.save()
    .then(() => {
      res.status(200).json({ 'khunggio': 'Khung giờ thêm thành công!' });
    })
    .catch(err => {
      res.status(400).send("Sai thông tin");
    });
});

//update
router.route('/update/:id').put(function (req, res) {
  khunggioModel.findById(req.params.id, function (err, khunggio) {
    if (!khunggio)
      return next(new Error('Không tìm thấy id khung giờ'));
    else {
      khunggio.thoigianbatdau = req.body.thoigianbatdau;
      khunggio.thoigianketthuc = req.body.thoigianketthuc;
      khunggio.hesogia = req.body.hesogia;

      khunggio.save().then(emp => {
        res.json('Khung giờ update thành công!');
      })
        .catch(err => {
          res.status(400).send("Không thể update khung giờ");
        });
    }
  });
});

//delete
router.route('/delete/:id').delete(function (req, res) {
  khunggioModel.findByIdAndRemove({ _id: req.params.id }, function (err, deletedkhunggio) {
    if (err) res.json(err);
    else res.json({
      message: 'Xóa thành công!',
      khunggio: deletedkhunggio
    });
  });
});


//get all khung gio
router.route('/').get(function (req, res) {
  khunggioModel.find(null, null, {sort: { thoigianbatdau : 'asc' }}, function (err, khunggio) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(khunggio);
    }
  });
});

//get byid khung gio
router.route('/:id').get(function (req, res) {
  let id = req.params.id;
  khunggioModel.findById(id, function (err, khunggio) {
    res.json(khunggio);
  });
});


module.exports = router; 