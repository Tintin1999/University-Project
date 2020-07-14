//TEACHER PROFILE
const mongoose = require("mongoose");
const Follower = require("../follower/follower");
const Student = require("../student/profile");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: Date,
        //required: true,
    },
    address: {
        city: {
            type: String,
        },
        country: {
            type: String,
        },
        pin: {
            type: Number,
        },
    },
    sex: {
        type: String,
        enum: ["male", "female", "other"],
        //required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    avatar: {
        type: Buffer,
    },
    follow: [
        {
            following: {
                type: String,
            }
        }
    ]
}, {
    timestamps: true,
});

teacherSchema.virtual("followings", {
    ref: "Follower",
    localField: '_id',
    foreignField: 'owner',
});

teacherSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.tokens;
    delete userObject.avatar;
    return userObject;
};

teacherSchema.methods.followUser = async function (_followingID) {
    const user = this;
    const following = new Follower({
        owner: user._id,
        following: _followingID,
    });
    const result = await following.save();
    return result;
};

teacherSchema.methods.followingList = async function (query) {

    const user = this;
    const sort = {};

    if (query.sortBy) {
        sort[query.sortBy.split(":")[0]] = query.sortBy.split(":")[1] === 'true' ? 1 : -1;
    }

    const options = {
        limit: parseInt(query.limit),
        skip: parseInt(query.skip),
        sort,
    }

    await user.populate(
        {
            path: "followings",
            options
        }
    ).execPopulate();

    const followList = [];
    for (var i = 0; i < user.followings.length; ++i) {
        const foundUser = await Student.findById(user.followings[i].following);
        followList.push(foundUser);
    }

    return followList;

};

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;