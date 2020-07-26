const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
}, {
    timestamps: true,
});

const Follower = mongoose.model("Follower", followerSchema);

module.exports = Follower;

