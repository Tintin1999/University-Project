const express = require("express");
const router = new express.Router();
const User = require("../../database/models/user/user");

router.post("/register", async (req, res) => {
    console.log(req.body);
    try {
        const user = new User(req.body);
        await user.save();
    }
    catch (e) {
        console.log(e);
    }
    res.send();
});

module.exports = router;