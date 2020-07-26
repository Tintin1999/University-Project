const mongoose = require("mongoose");

//User Common Profile
const Profile_Schema = new mongoose.Schema({
    username: {
        type: String,
        //required: true,
    },
    password: {
        type: String,
        //required: true,
    },
    avatar: {
        type: Buffer,
    },
    name: {
        type: String,
    },
    DOB: {
        type: Date,
    },
    sex: {
        type: String,
        enum: ["male", "female", "other"],
        //required: true,
    },
    address: {
        city: {
            type: String,
        },
        pin: {
            type: Number,
        },
        country: {
            type: String,
        }
    }
});

module.exports = Profile_Schema;