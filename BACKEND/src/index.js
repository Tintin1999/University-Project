const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
// require("./testing/test");

require("dotenv").config();
require("./database/mongoose");

const app = express();

//Import Routes
//  ||
//  \/
//Home Route
const homeRoute = require("./routes/home/home_route");
const studentRoute = require("./routes/student/student");
const teacherRouter = require("./routes/teacher/teacher");


//Middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
// app.use(bodyParser.json());

//express JSON
app.use(express.json());

//user Routes
app.use(homeRoute);
app.use(studentRoute);
app.use(teacherRouter);

// app.get("/", (req, res ) => {
//     req.query
// });

//Listen Route
app.listen(process.env.PORT, () => {
    console.log("Server Running On Port", process.env.PORT);
});
