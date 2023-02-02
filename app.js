const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const users = require('./models/users.model');
const userRouter= require("./routes/users.route")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/users", userRouter)




//Home Route
app.get("/", (req,res) =>{
    res.sendFile(__dirname+"/views/index.html")
})

//Invalid Route
app.use("/", (req, res, next) =>{
    res.status(404).json({message: "Route not found"});
})

//Server Error
app.use("/", (err, req, res, next) =>{
    res.status(500).json({message: "Something is missing"});
})

module.exports= app;