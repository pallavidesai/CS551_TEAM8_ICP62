/**
 * Created by Marmik on 04/10/2016.
 */
var express = require('express');
var app = express();
var request = require('request');
app.get('/getPlace', function (req, res) {
    var result={
        'venue': []
    };

    request('https://kgsearch.googleapis.com/v1/entities:search?query=kansas&key=AIzaSyCvnpFKAcsp9bg94zysoNY7QLv-P3SghJ8&limit=1&indent=True', function (error, response, body) {
        //Check for error
        if(error){
            return console.log('Error:', error);
        }

        //Check for right status code
        if(response.statusCode !== 200){
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }
        //All is good. Print the body
        body = JSON.parse(body);
        var ven = body.response.venues;
        for(var i=0;i<ven.length;i++)
        {
            result.venue.push({'name': ven[i].name,
                                'address':ven[i].location.formattedAddress.toString()});
        }
        res.contentType('application/json');
        res.write(JSON.stringify(result));
        res.end();
    });
    console.log(result);


})

var server = app.listen(8081, function () {
    // var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://127.0.0.1:%s",port)
})