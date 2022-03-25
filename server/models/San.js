const mongoose = require("mongoose");
const Schema = mongoose.Schema
const SanSchema = new Schema(
    {
        TenSan: {
            type: String,
            required: true,
            max:100
        },
        TinhTrang: {
            type: String,
            max: 20,
        },
        LoaiSan: {
            type: Schema.Types.ObjectId,
            ref: 'loaisans',
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("sans", SanSchema);
