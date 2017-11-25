let express = require ("express");
let cors = require ("cors");
let app = express();
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
    app.get("/trajets/villeD/villeA",function(req,res){
    	let filterObject = {};
    	if(req.params.villeD != "*"){filterObject.depart.ville = req.params.villeD;}
    	if(req.params.villeA != "*"){filterObject.arrive.ville = req.params.villeA;}
    	trajetResearch(db,{"message" : "/trajets","filterObject": filterObject},function(step,results){
    		console.log(step + "avec" + results.length + "trajets selectionnés : ");
    		res.setHeader("Content-type","application/json; charset = UTF-8");
    		let json = JSON.stringify(results);
    		res.end(json);
    	})
    });
});