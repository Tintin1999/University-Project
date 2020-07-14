const mongoose = require("mongoose");
const Teacher = require("../database/models/teacher/profile");

async function main() {

    try {

        const teachers = await Teacher.find({}).limit(2).skip(2);
        console.log(teachers);

    } catch (e) {
        console.log("error", e);
    }

}

main();