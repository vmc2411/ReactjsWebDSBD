const mongoose = require("mongoose");
const LoaitintucSchema = new mongoose.Schema(
  {
    tenloaitintuc: {
      type: String,
      max: 500,
    },
  },

);
module.exports = mongoose.model("Loaitintuc", LoaitintucSchema);