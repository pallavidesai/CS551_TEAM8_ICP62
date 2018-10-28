var http = require('http');
var fs = require("fs");
var url = require('url');
const request = require('request');
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create a server

var server = app.listen(process.env.PORT || 8081,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})




app.get('/getData', function (req, res) {
    var searchKeywords = req.query.searchkey;
    console.log("Param are "+searchKeywords);
    request("https://kgsearch.googleapis.com/v1/entities:search?query="+searchKeywords+"&key=AIzaSyCvnpFKAcsp9bg94zysoNY7QLv-P3SghJ8&limit=1&indent=True", function(err, resonse, body)
     {
         console.log("success triggered");
         res.send(body);

     });

});

//Checking


// Console will print the message
console.log('Client Server running at http://127.0.0.1:8081/');