const mongoose = require("mongoose");

const Teacher_Schema = new mongoose.Schema({
    subjects: [
        {
            subject: {
                type: String,
            }
        }
    ],
    classes: [{
        class: {
            type: Number,
        }
    }]
});

module.exports = Teacher_Schema;