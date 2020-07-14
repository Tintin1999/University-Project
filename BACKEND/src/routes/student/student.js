const express = require("express");
const router = new express.Router();
const multer = require("multer");

const upload = multer(
    //     {
    //     fileFilter(req, file, cb) {
    //         cb(undefined, true);
    //     }
    // }
);

const Student = require("../../database/models/student/profile");

router.post("/register/student", upload.single("avatar"), async (req, res) => {

    const user = {
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        name: req.body.name,
        dateofbirth: req.body.dateofbirth,
        sex: req.body.sex,
        address: {
            city: req.body.city,
            country: req.body.country,
            pin: req.body.pin,
        },
    };
    try {
        const student = new Student(user);
        student.avatar = req.file.buffer;
        const result = await student.save();
        res.status(201).send(result);
    }
    catch (e) {
        console.log(e);
        res.status(400).send();
    }
});

router.post("/login/student", async (req, res) => {
    try {
        const user = await Student.findOne(req.body);
        if (!user)
            throw new Error();
        res.status(200).send(user);
    } catch (e) {
        res.status(404).send();
    }
});

router.get("/image/:userId", async (req, res) => {

    try {
        const user = await Student.findById(req.params.userId);
        if (!user) throw new Error();
        res.set("Content-Type", "image/jpg");
        res.send(user.avatar);
    }
    catch (e) {
        res.status(404).send();
    }

});

module.exports = router;