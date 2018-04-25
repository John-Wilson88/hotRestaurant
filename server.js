//Phase II
// create server, have server listening.

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

const PORT = 3000;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Phase III 
// variables and routes.
var tables = [];
var waitlist = [];

//Routes
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "home.html"));
	});

	app.get("/tables", function(req, res){
		res.sendFile(path.join(__dirname, "tables.html"));
	});

	app.get("/reserve", function(req, res){
		res.sendFile(path.join(__dirname, "reserve.html"));
	});

	app.get("/api/ReservedData", function(req, res){
		return res.json(tables);
	});

	app.post("/api/ReservedData", function(req, res){
		var newtable = req.body;
		console.log(newtable);
		tables.push(newtable);
		res.json(newtable);
	});

	/*app.get("/api/WaitListData", function(req, res){
		return res.json(waitlist);
	});

	app.post("/api/WaitListData", function(req, res){
		var newwaitlist = req.body;
		console.log(newwaitlist);
		waitlist.push(newwaitlist);
		res.json(newwaitlist);
	});*/


app.listen(PORT, function(){
	console.log("app is Listening to PORT: " + PORT);
});


