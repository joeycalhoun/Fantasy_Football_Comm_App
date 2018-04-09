var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Poll = require("./models/poll");
var Option = require("./models/option");
mongoose.connect("mongodb://localhost/ff_app_v1");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
	// res.redirect("/login");
	res.render("new");
});

app.get("/login", function(req,res){
	res.render("login");
});

app.post("/login", function(req,res){

});

app.post("/polls", function(req,res){
	Poll.create(req.body,function(err, poll){
		if(err){
			console.log(err);
		}
		else{
			poll.question = req.body.question;
		}
	});
	
});

app.listen(3300, function(){
	console.log("Server started...");
});