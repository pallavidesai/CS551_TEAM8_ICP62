var express = require('express')
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));


app.listen(port, function() {
	console.log('app running')
    console.log("Example app listening at http://:%s", port)
})


var http = require('http');
var fs = require("fs");
var url = require('url');
const request = require('request');
var cors = require('cors');
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create a server






app.get('/getData', function (req, res) {
    var searchKeywords = req.query.searchkey;
    console.log("Param are "+searchKeywords);
    request("https://kgsearch.googleapis.com/v1/entities:search?query="+searchKeywords+"&key=AIzaSyCvnpFKAcsp9bg94zysoNY7QLv-P3SghJ8&limit=1&indent=True", function(err, resonse, body)
     {
         console.log("success triggered");
         res.send(body);

     });

});




// Console will print the message
console.log('Client Server running at http://127.0.0.1:8081/');




/*

Open terminal and execute these commads starting
--->$ git init
--->$ git add .
--->$ heroku --version
--->$ heroku login
Enter your Heroku credentials:
    Email: rnd95@mail.umkc.edu
Password: *********
Logged in as rnd95@mail.umkc.edu
--->$ heroku local web
--->$ git add .
--->$ git commit -am "lab 10"
--->$ heroku create

 git push --set-upstream https://git.heroku.com/icp-trial-70552.git master


 https://rocky-coast-70552.herokuapp.com/

*/