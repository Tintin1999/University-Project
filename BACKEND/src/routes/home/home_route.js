const { Router } = require("express");
const router = new Router();
const path = require("path");

// console.log(path.join(__dirname + "../../../../public/index.html"));

router.route("/")
    .get(async (req, res) => {
        res.sendFile(path.join(__dirname + "../../../../public/index.html"));
        //res.status(200).send("Hello World");
    });

module.exports = router;
