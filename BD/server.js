let express = require ("express");
let cors = require ("cors");
let app = express();
let assert = require('assert');


app.listen(8888);
app.use(cors());

let mongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;

let url = "mongodb://localhost:27017/cov-urage";

function trajetResearch(db,param,callback){
    console.log("trajetResearch");
    console.log(param["filterObject"]);
	db.collection("trajets").find(param["filterObject"]).toArray(function(err,documents){
        if (err)
            callback(err,[]);
		else if (documents !== undefined) 
			callback(param["message"],documents);
		else
			callback(param["message"],[]);
	});
}


function trajetPrix(db,param,callback){
    db.collection("trajets").find(param["filterObject"]).toArray(function(err,documents){
        if (err)
            callback(err,[]);
        else if (documents !== undefined) 
            callback(param["message"],documents);
        else
            callback(param["message"],[]);
    });
}
mongoClient.connect(url, function(error, db) {
    assert.equal(null,error);
    console.log("Connecté à la base de données cov-urage");
    app.get("/trajets/:villeD/:villeA",function(req,res){
    	let filterObject = {};
        filterObject.depart ={};
        filterObject.arrive={};
    	if(req.params.villeD != "*"){filterObject.depart.ville = req.params.villeD;}
    	if(req.params.villeA != "*"){filterObject.arrive.ville = req.params.villeA;}
        console.log(filterObject.depart.ville + "->" + filterObject.arrive.ville );


    	trajetResearch(db,{"message" : "/trajets","filterObject": filterObject},function(step,results){
    		console.log("\n" + step + "avec" + results.length + "trajets selectionnés : ");
    		res.setHeader("Content-type","application/json; charset = UTF-8");
    		let json = JSON.stringify(results);
            console.log(json);
    		res.end(json);
    	});
    });

    app.get("/trajets/:prix",function(req,res){
        let filterObject = {};
        if(req.params.prix != "*"){filterObject.prix = parseInt(req.params.prix);}

        trajetPrix(db,{"message" : "/trajets","filterObject": filterObject},function(step,results){
            console.log("\n" + step + "avec" + results.length + "trajets selectionnés : ");
            res.setHeader("Content-type","application/json; charset = UTF-8");
            let json = JSON.stringify(results);
            console.log(json);
            res.end(json);
        });
    });
});