const express = require("express");
const body = require("body-parser");

const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{
        kindofday: day,
    });
});

app.post("/",(req,res)=>{
    
});

app.listen(5040,()=>{
    console.log("server started");
});