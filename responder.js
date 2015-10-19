var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = +process.argv[2];
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.route("/ground4loor")
.get(function(req,res){
  console.log(req.body);
  console.log("GET request");
  res.status(200).send("HI!");
})
.post(function(req, res){
  console.log(req.body);
  if(req)
  res.status(200).json("Message received!");
});

http.createServer(app).listen(port);
