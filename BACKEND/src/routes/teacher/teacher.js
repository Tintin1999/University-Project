const express = require("express");
const router = new express.Router();
const multer = require("multer");

const upload = multer();

const Teacher = require("../../database/models/teacher/profile");
const Student = require("../../database/models/student/profile");

router.post("/register/teacher", upload.single("avatar"), async (req, res) => {

    // const user = {
    //     username: req.body.username,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     name: req.body.name,
    //     dateofbirth: req.body.dateofbirth,
    //     sex: req.body.sex,
    //     address: {
    //         city: req.body.city,
    //         country: req.body.country,
    //         pin: req.body.pin,
    //     },
    // };

    const user = req.body;

    try {
        console.log(user);
        const teacher = new Teacher(user);
        const result = await teacher.save();
        res.status(200).send(result);
    }
    catch (e) {
        console.log(e);
        res.status(400).send();
    }
});

router.route("/teacher/:teacherID/follow")
    .post(async (req, res) => {
        try {
            const teacher = await Teacher.findById(req.params.teacherID);
            if (!teacher) throw new Error("no teachers found");
            await teacher.followUser(req.body.follow);
            res.status(201).send("done");
        } catch (e) {
            console.log("error", e);
            res.status(400).send();
        }
    });



router.route("/teacher/:teacherID/followings")
    .get(async (req, res) => {
        try {
            const teacher = await Teacher.findById(req.params.teacherID);
            if (!teacher) throw new Error();
            const followList = await teacher.followingList(req.query);
            res.status(200).send(followList);

        } catch (e) {
            console.log("error ", e);
            res.status(400).send();
        }
    });

module.exports = router;