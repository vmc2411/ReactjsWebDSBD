const mongoose = require("mongoose");
const Schema = mongoose.Schema
const TintucSchema = new Schema(
    {
        TieuDe: {
            type: String,
            required: true,
            max:500
        },
        NoiDung: {
            type: String,
        },
        NgayLap: {
            type: Date,
        },
        LoaiTinTuc: {
            type: Schema.Types.ObjectId,
            ref: 'Loaitintuc',
        },
        User: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("tintucs", TintucSchema);