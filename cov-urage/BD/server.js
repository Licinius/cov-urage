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
	db.collection("trajets").find(param["filterObject"]).toArray(function(err,documents){
		if (err)
			callback(err,[]);
		else if (documents !== undefined) 
			callback(param["message"],documents);
		else
			callback(param["message"],[]);
	});
}
function trajetAll(db,param,callback){
	console.log("trajetAll");
	db.collection("trajets").find().toArray(function(err,documents){
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

	app.get("/trajets",function(req,res){
		trajetAll(db,{"message" : "/trajets"},function(step,results){
			console.log("\n" + step + "avec" + results.length + "trajets selectionnés : ");
			res.setHeader("Content-type","application/json; charset = UTF-8");
			let json = JSON.stringify(results);
			console.log(json);
			res.end(json);
		});
	});


	app.get("/trajets/:villeD/:villeA/:jour/:mois/:annee",function(req,res){
		console.log("Trajets ville départ et ville arrivé");
		let filterObject = {'depart.ville' : null,'arrive.ville' : null};

		if(req.params.jour != "*"){filterObject['date.jour']=parseInt(req.params.jour);}
		if(req.params.mois != "*"){filterObject['date.mois']=parseInt(req.params.mois);}
		if(req.params.annee != "*"){filterObject['date.annee']=parseInt(req.params.annee);}
		if(req.params.villeD != "*"){filterObject['depart.ville'] = req.params.villeD;}
		if(req.params.villeA != "*"){filterObject['arrive.ville'] = req.params.villeA;}
		console.log(req.params.jour);console.log(filterObject);
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
	//Authentification
	app.get("/auth/login=:login/password=:password",function(req,res){
		console.log ("Authentification");
		let login  = req.params.login;
		let password = req.params.password;
		console.log("Login : " + login + "  -  pass : "+password);
		res.setHeader("Content-type","text/plain; charset=UTF-8");
		db.collection("users").find({"email":login, "password":password}).toArray (function(err,doc){
			console.log(doc)

			res.end(JSON.stringify(doc));

			
		});
	});

	app.get("/user/create/:email/:nom/:prenom/:numero/:rue/:ville/:pays/:telephone/:age/:mdp",function(req,res){
			console.log("Ajout d'un utilisateur");
		    var myUser = {
		      email :req.params.email,
		      nom :req.params.nom,
		      prenom :req.params.prenom,
		      adresse: {
		        numero : req.params.numero,
		        nom : req.params.rue,
		        ville : req.params.ville,
		        pays : req.params.pays
		      },
		      telephone : req.params.telephone,
		      age : req.params.age,
		      password :req.params.mdp
		    };
		    res.setHeader("Content-type","text/plain; charset=UTF-8");
		    db.collection("users").insertOne(myUser,function(err,doc){
		    	if(err) throw err;
		    	res.end(JSON.stringify(doc));
		    });
	});

	app.get("/addUser/:idVoyage/:login",function(req,res){
		console.log("addUser");
		let idVoyage = req.params.idVoyage;
		let login = req.params.login;
		res.setHeader("Content-type","text/plain; charset=UTF-8");
		db.collection("trajets").update({"_id":ObjectId(idVoyage)},{'$addToSet':{'participant':login}},function(err,doc){
		    if(err) throw err;
		    console.log(doc);
		    res.end(JSON.stringify(doc));
		});
	});
});