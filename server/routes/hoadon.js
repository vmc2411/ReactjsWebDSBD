const express = require('express');

const app = express();
const router = express.Router();
let hoaDonModel = require("../models/HoaDon");

//create
router.route('/add').post(function (req, res) {
    const { TongTien } = req.body;

    let newHoaDon = new hoaDonModel(
        {
            TongTien
        }
    );
    newHoaDon.save()
        .then(() => {
            res.status(200).json({ 'message': 'Thêm hóa đơn thành công!' });
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

//thay đổi trạng thái hóa đơn
router.route('/update/:id').put(function (req, res) {
    hoaDonModel.findById(req.params.id, function (err, hoadon) {
        if (!hoadon)
            return next(new Error('Không tìm được hóa đơn'));
        else {
            hoadon.TrangThai = hoadon.TrangThai ? false : true;

            hoadon.save()
                .then(hoadon => {
                    res.json({ 'message': 'Cập nhật thành công', hoadon: hoadon });
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
    });
});

// //delete
// router.route('/delete/:id').delete(function (req, res) {
//     sanModel.findByIdAndRemove({ _id: req.params.id }, function (err, deletedSan) {
//         if (err) res.json(err);
//         else res.json({
//             message: 'Delete success!',
//             san: deletedSan
//         });
//     });
// });

//get all hoa don
router.route('/').get(async function (req, res) {
    hoaDonModel.find(function (err, hoadon) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(hoadon);
        }
    });
});

// //get by id
// router.route('/:id').get(function (req, res) {
//     let id = req.params.id;
//     sanModel.findById(id).populate('LoaiSan').
//         exec()
//         .then(san => {
//             res.json(san)
//         })
//         .catch(err => {
//             res.json(err)
//         });
// });

module.exports = router;