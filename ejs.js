const express = require("express");
const body = require("body-parser");

const app = express();

var items = [];
var item = "";

app.set("view engine","ejs");

app.use(body.urlencoded({extended: true}));
app.use(express.static("public"));

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
        kindoftask: items,
    });
});

app.post("/",(req,res)=>{
    item = req.body.task;
    items.push(item);
    res.redirect("/");
});

app.listen(5040,()=>{
    console.log("server started");
});