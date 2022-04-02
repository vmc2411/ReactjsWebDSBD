const mongoose = require("mongoose");
const Schema = mongoose.Schema
const PhieuDatSanSchema = new Schema(
    {
        TongTien: {
            type: Number
        },
        NgayLapPhieu: {
            type: Date,
            default: Date.now
        },
        HoaDon: {
            type: Schema.Types.ObjectId,
            ref: 'hoadon'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }
);
module.exports = mongoose.model("phieudatsan", PhieuDatSanSchema);