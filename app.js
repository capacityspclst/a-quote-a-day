var express = require('express');
var app = express();

app.get("/", function(reaq, res){
    res.sendFile(__dirname + '/index.html')
})

const port = process.env.port || 8080;

var server = app.listen(port, function(req, res){
    console.log("Catch the action at http://localhost:" + port)
})