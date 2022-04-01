const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ChiTietPhieuDatSanSchema = new Schema(
    {
        PhieuDatSan: {
            type: Schema.Types.ObjectId,
            ref: 'phieudatsan'
        },
        San: {
            type: Schema.Types.ObjectId,
            ref: 'sans'
        },
        NgayDa: {
            type: Date
        },
        ThanhTien: {
            type: Number
        },
        Khunggio: {
            type: Schema.Types.ObjectId,
            ref: 'Khunggio'
        }
    }
);
module.exports = mongoose.model("chitietphieudatsan", ChiTietPhieuDatSanSchema);