const mongoose = require("mongoose");
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
  },

);
module.exports = mongoose.model("Loaisan", LoaisanSchema);
