const express = require('express');
const router = express.Router();
let hoaDonModel = require("../models/HoaDon");
let phieudatsanModel = require("../models/PhieuDatSan");
let chitietphieudatsanModel = require("../models/ChiTietPhieuDatSan");
//create
router.route('/add').post(function (req, res) {
    const { TongTien } = req.body;
    let newHoaDon = new hoaDonModel(
        {
            TongTien
        }
    );
    newHoaDon.save()
        .then((hoadon) => {
            res.status(200).json({ 'message': 'Thêm hóa đơn thành công!', hoadon: hoadon });
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

//delete
router.route('/delete/:id').delete(async function (req, res) {
    const idHoadon = await hoaDonModel.findById(req.params.id).then(data => data._id);
    const idPhieuDatSan = await phieudatsanModel.find({ HoaDon: idHoadon }).then(data => data[0]._id);
    await chitietphieudatsanModel.deleteMany({ PhieuDatSan: idPhieuDatSan })
    await phieudatsanModel.findByIdAndRemove(idPhieuDatSan)
    await hoaDonModel.findByIdAndRemove(idHoadon).then(hoadon => {
        res.json({
            message: 'Delete success!',
            hoadon: hoadon
        });
    }).catch(err => {
        res.json({
            message: err
        });
    })
});

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