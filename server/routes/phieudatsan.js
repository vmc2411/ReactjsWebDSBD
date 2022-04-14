const express = require('express');
const router = express.Router();
let phieudatsanModel = require("../models/PhieuDatSan");
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
//create
router.route('/add').post(function (req, res) {
    const { TongTien, IDHoaDon, userID } = req.body;

    let newPhieuDatSan = new phieudatsanModel(
        {
            TongTien: TongTien,
            HoaDon: IDHoaDon,
            user: userID
        }
    );
    newPhieuDatSan.save()
        .then((phieu) => {
            res.status(200).json({ 'message': 'Thêm thành công!', phieudatsan: phieu });
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

//delete
router.route('/delete/:id').delete(function (req, res) {
    phieudatsanModel.findByIdAndRemove({ _id: req.params.id }, function (err, deletedPhieu) {
        if (err) res.json(err);
        else res.json({
            message: 'Delete success!',
            san: deletedPhieu
        });
    });
});

//get all phieu dat san
router.route('/').get(async function (req, res) {
    phieudatsanModel.find(function (err, phieudatsan) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(phieudatsan);
        }
    });
});
//get all chi tiet phieu dat san
router.route('/lichsudatsan').post(async function (req, res) {
    const idUser = req.body.iduser;
    console.log(idUser);
    try {
        let history;
        history = await phieudatsanModel.find({ user: idUser });
        res.json(history);
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
});
module.exports = router;