const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");

require("dotenv").config();
require("./database/mongoose");

const app = express();

//Import Routes
//  ||
//  \/
//Home Route
const homeRoute = require("./routes/home/home_route");
const studentRoute = require("./routes/student/student");

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//user Routes
app.use(homeRoute);
app.use(studentRoute);

//Listen Route
app.listen(process.env.PORT, () => {
    console.log("Server Running On Port", process.env.PORT);
});
