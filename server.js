var express = require('express');

var app = express();

app.get('/', function(req, res) {
  var name = "Batman";
  res.json("My name is " + name);
});

app.listen(3000, function(err) {
  if (err) throw err;
  console.log("Server is Running on port 3000");
});
