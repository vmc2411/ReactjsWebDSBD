const mongoose = require("mongoose");
const Schema = mongoose.Schema
const LoaisanSchema = new mongoose.Schema(
  {
    tenloaisan: {
      type: String,
      max: 500,
    },
    soluongnguoi: {
      type: Number,
    },
    gia: {
      type: Number,
    },
    San: [
      {
        type: Schema.Types.ObjectId,
        ref: 'sans',
      }
    ]
  },

);
module.exports = mongoose.model("Loaisan", LoaisanSchema);
