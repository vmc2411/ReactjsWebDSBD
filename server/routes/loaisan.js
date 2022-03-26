const express = require('express');

const app = express();
const router = express.Router();
let loaisanModel = require("../models/Loaisan");

//create
router.route('/add').post(function (req, res) {
  let loaisan = new loaisanModel(req.body);
  loaisan.save()
    .then(() => {
      res.status(200).json({ 'loaisan': 'Loaisan Added Successfully!' });
    })
    .catch(err => {
      res.status(400).send("Something Went Wrong");
    });
});

//update
router.route('/update/:id').put(function (req, res) {
  loaisanModel.findById(req.params.id, function (err, loaisan) {
    if (!loaisan)
      return next(new Error('Unable To Find Loaisan With This Id'));
    else {
      loaisan.tenloaisan = req.body.tenloaisan;
      loaisan.soluongnguoi = req.body.soluongnguoi;
      loaisan.gia = req.body.gia;

      loaisan.save().then(emp => {
        res.json('Loaisan Updated Successfully');
      })
        .catch(err => {
          res.status(400).send("Unable To Update Loaisan");
        });
    }
  });
});

//delete
router.route('/delete/:id').delete(function (req, res) {
  loaisanModel.findByIdAndRemove({ _id: req.params.id }, function (err, loaisan) {
    if (err) res.json(err);
    else res.json('Loaisan Deleted Successfully');
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