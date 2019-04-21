const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload());

app.get("/", function(req, res)){
    res.render("Hello World!");
}

app.listen(3000, function(){
    console.log("GuidePros website is now online.");
});