let express = require ("express");
let cors = require ("cors");
let app = expres();
var assert = require('assert');
var MongoClient = require("mongodb").MongoClient;


app.listen(8888);
app.use(cors());

let mongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;

let url = "mongodb://localhost:27017/cov-urage";

function trajetResearch(db,param,callback){
	db.collection("trajets").find(["filterObject"]).toArray(function(err,documents){
		if (documents !== undefined) 
			callback(param["message"],documents);
		else
			callback(param["message"],[]);
	});
}

MongoClient.connect(url, function(error, db) {
    assert.equal(null,error);
    console.log("Connecté à la base de données cov-urage");
});