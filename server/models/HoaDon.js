const mongoose = require("mongoose");
const Schema = mongoose.Schema
const HoaDonSchema = new Schema(
    {
        TongTien: {
            type: Number
        },
        NgayLapHoaDon: {
            type: Date,
            default: Date.now
        },
        TrangThai: {
            type: Boolean,
            default: false
        },
    }
);
module.exports = mongoose.model("hoadon", HoaDonSchema);