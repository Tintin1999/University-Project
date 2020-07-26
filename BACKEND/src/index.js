const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
// require("./testing/test");

require("dotenv").config();
require("./database/mongoose");

const app = express();

//Import Routes
const homeRoute = require("./routes/home/home_route");
const userRoute = require("./routes/user/user");

//express JSON
app.use(express.json());

//user Routes
app.use(homeRoute);
app.use(userRoute);

//Listen Route
app.listen(process.env.PORT, () => {
    console.log("Server Running On Port", process.env.PORT);
});
