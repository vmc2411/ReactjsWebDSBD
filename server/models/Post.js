const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    url: {
      type: String,
    },
      img: {
        type: String,
      },    
    }
    );
module.exports = mongoose.model("Post", PostSchema);
