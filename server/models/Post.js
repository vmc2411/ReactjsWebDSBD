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
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("posts", PostSchema);
