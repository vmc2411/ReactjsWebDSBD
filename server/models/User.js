const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        fullname:{
            type: String,
            min: 3,
            max: 30,
            require: true,
        },
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        }, 
        isAdmin:{
           type: Boolean,
           require:true, 
        },     
    },
    { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);