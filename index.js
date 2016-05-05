/**
 * Created by noname on 5/5/16.
 */

var mongoClient = require('mongodb').MongoClient;
var connectionUrl = 'mongodb://deb-dev:27017/test';
mongoClient.connect(connectionUrl, function(err, db){
    if(err){
        console.error('Error while connecting');
        console.log(err);
    }else{
        console.log('connected');
        db.close();
    }
});