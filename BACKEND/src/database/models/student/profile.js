//STUDENT PROFILE
const mongoose = require("mongoose");

const Student_Schema = new mongoose.Schema({
    subjects: [
        {
            subject: {
                type: String,
            }
        }
    ],
    class: {
        type: Number,
    }
});

module.exports = Student_Schema;