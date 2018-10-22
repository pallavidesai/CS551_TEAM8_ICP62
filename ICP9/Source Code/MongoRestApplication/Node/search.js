/*
 * Created by mnpw3d on 20/10/2016.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://pallavi:pallavi123@ds135993.mlab.com:35993/asetrial1';


var findUserwithmajor = function(db, callback) {
    var cursor = db.collection('users').find({"major":"cs"});
    cursor.each(function(err,doc){
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name:" + doc.name);

        }
    });
}
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findUserwithmajor(db, function() {
        db.close();
    });
});