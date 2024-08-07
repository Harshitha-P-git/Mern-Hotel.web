const express = require("express");
const mongoose = require("mongoose");
const customerRoute=require("./controller/customerRoute");
const bodyParser = require("body-parser");
const cors = require("cors");



const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://harshithaperala:1234566@cluster0.jbvmeuu.mongodb.net/hoteldb");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected"));
db.on("error",()=>console.log("Not Connected"));

app.use("/customerRoute",customerRoute);

app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})
