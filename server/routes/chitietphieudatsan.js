const express = require('express');
const router = express.Router();
let chitietphieudatsanModel = require("../models/ChiTietPhieuDatSan");

//create
router.route('/add').post(function (req, res) {
    const { IDPhieuDatSan, IDSan, NgayDa, ThanhTien, IDKhunggio } = req.body;

    let newChitietPhieuDatSan = new chitietphieudatsanModel(
        {
            PhieuDatSan: IDPhieuDatSan,
            San: IDSan,
            NgayDa: NgayDa,
            ThanhTien: ThanhTien,
            Khunggio: IDKhunggio
        }
    );
    newChitietPhieuDatSan.save()
        .then((chitietphieu) => {
            res.status(200).json({ 'message': 'Thêm chi tiết phiếu thành công!' , chitietphieudatsan: chitietphieu});
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

//delete
// router.route('/delete/:id').delete(function (req, res) {
//     chitietphieudatsanModel.findByIdAndRemove({ _id: req.params.id }, function (err, deletedPhieu) {
//         if (err) res.json(err);
//         else res.json({
//             message: 'Delete success!',
//             san: deletedPhieu
//         });
//     });
// });

//get all phieu dat san
router.route('/').get(async function (req, res) {
    const idsan = req.query.idSan;
    const ngayda = req.query.ngayda;
    chitietphieudatsanModel.find({ San: idsan, NgayDa: ngayda }, function (err, chitietphieudatsan) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(chitietphieudatsan);
        }
    });
});

//get all phieu dat san
router.route('/detail/:idphieu').get(async function (req, res) {
    const idphieu = req.params.idphieu;
    try {
        let chitietphieudatsan; 
        if (idphieu) {
            chitietphieudatsan = await chitietphieudatsanModel.find({PhieuDatSan: idphieu});
            res.json(chitietphieudatsan);
        } else {
            chitietphieudatsan = await chitietphieudatsanModel.find();
            res.json(chitietphieudatsan);
        }
      
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
});
module.exports = router;