const mongoose = require("mongoose");

const Student_Schema = require("../student/profile");
const Teacher_Schema = require("../teacher/profile");
const Profile_Schema = require("../profile/profile");

//User Common Profile
const User_Schema = new mongoose.Schema({
    profile: {
        type: Profile_Schema,
    },
    studentprofile: {
        type: Student_Schema,
    },
    teacherprofile: {
        type: Teacher_Schema,
    },
}, {
    timestamps: true,
});

/* 

SAMPLE JSON DATA

{
"profile":{
    "name":"Subrata",
    "username":"subrata1999",
    "password":"123456"
},
"studentprofile":{
    "class":12,
    "subjects":[
        {
            "subject":"mathematics"
        }
    ]
},
"teacherprofile":{
    "subjects":[
        {
            "subject":"Maths"
        },
        {
            "subject":"Physics"
        }
    ],
    "classes":[
        {
            "class":4
        },
        {
            "class":"12"
        }
    ]
}
}
*/

const User = mongoose.model("User", User_Schema);

module.exports = User;