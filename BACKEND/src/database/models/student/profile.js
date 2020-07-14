//STUDENT PROFILE
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: Date,
        required: true,
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
        required: true,
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
    tokens: [
        {
            token: {
                type: String,
            }
        },
    ]
}, {
    timestamps: true,
});

studentSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.tokens;
    delete userObject.avatar;
    return userObject;
};

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;