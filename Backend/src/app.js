const express = require("express");
const cors = require("cors");
const authRouter = require("../src/routes/auth.route");
const multer = require("multer");
const app = express();
const cookieParser = require("cookie-parser");


const upload = multer({
    storage: multer.memoryStorage(), // this is use to store the file tempo till the file is store into somewhere
})
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth/", authRouter);



module.exports= app;