var express = require('express');

var app = express();


app.use('/public', express.static('public'));

//Base de datos
var MongoClient = require('mongodb').MongoClient,
 	Server = require('mongodb').Server; 
 	MongoClient.connect("mongodb://alvaro:alvaro@proximus.modulusmongo.net:27017/mu7demAg", { 
 							db: { w: 1, native_parser: false }, 
 							server: { 
 								poolSize: 5, 
 								socketOptions: { connectTimeoutMS: 500 }, 
 								auto_reconnect: true 
 								}, 
 								replSet: {}, 
 								mongos: {} 
 								}, function(err, db) { 
 			if(err){ 
 				console.log("Connection Failed Via Connection String."); 
 			} else {
 				console.log("Connected Via Connection String . . ."); 
 				db.logout(function(err, result) { 
 					if(!err){ 
 						console.log("Logged out Via Connection String . . ."); 
 				    }
 				    db.close(); 
 				    console.log("Connection closed . . ."); 
 				}); 
 			} 
		});




// Start the server.
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});