const mongoose = require("mongoose");
const KhunggioSchema = new mongoose.Schema(
  {
    thoigianbatdau: {
      type: String,
    },
    thoigianketthuc: {
      type: String,
    },
    hesogia: {
      type: Number,
    },
  },

);
module.exports = mongoose.model("Khunggio", KhunggioSchema);
