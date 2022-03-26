const mongoose = require("mongoose");
const KhunggioSchema = new mongoose.Schema(
  {
    thoigianbatdau: {
      type: Date,
    },
    thoigianketthuc: {
      type: Date,
    },
    hesogia: {
      type: Number,
    },
  },

);
module.exports = mongoose.model("Khunggio", KhunggioSchema);
