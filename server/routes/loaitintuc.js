const express = require('express');
const router = express.Router();
let loaitintucModel = require("../models/Loaitintuc");
let tintucModel = require("../models/Tintuc");

//create
router.route('/add').post(function (req, res) {
  let loaitintuc = new loaitintucModel(req.body);
  loaitintuc.save()
    .then(() => {
      res.status(200).json({ 'loaitintuc': 'Loaitintuc Added Successfully!' });
    })
    .catch(err => {
      res.status(400).send("Something Went Wrong");
    });
});

//update
router.route('/update/:id').put(function (req, res) {
  loaitintucModel.findById(req.params.id, function (err, loaitintuc) {
    if (!loaitintuc)
      return next(new Error('Unable To Find Loaitintuc With This Id'));
    else {
      loaitintuc.tenloaitintuc = req.body.tenloaitintuc;
      loaitintuc.save().then(emp => {
        res.json('Loaitintuc Updated Successfully');
      })
        .catch(err => {
          res.status(400).send("Unable To Update Loaitintuc");
        });
    }
  });
});

//delete
router.route('/delete/:id').delete(function (req, res) {
  tintucModel.find({LoaiTinTuc: req.params.id }).remove().exec();
  loaitintucModel.findByIdAndRemove({ _id: req.params.id }, function (err, loaitintuc) {
    if (err) res.json(err);
    else res.json({message:'Loaitintuc Deleted Successfully', loaitintuc: loaitintuc});
  });
});


//get all loaitintuc
router.route('/').get(function (req, res) {
  loaitintucModel.find(function (err, loaitintuc) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(loaitintuc);
    }
  });
});

//get byid loaitintuc
router.route('/:id').get(function (req, res) {
  let id = req.params.id;
  loaitintucModel.findById(id, function (err, loaitintuc) {
    res.json(loaitintuc);
  });
});


module.exports = router;