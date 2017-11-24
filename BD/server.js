var url = "mongodb://localhost:27017/cov-urage";
var http = require("http");
var assert = require('assert');
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, function(error, db) {
    assert.equal(null,error);
    console.log("Connecté à la base de données cov-urage");
});

var server = http.createServer(function(req, res) {

  res.writeHead(200);

  res.end('Salut tout le monde !');

});
server.listen(8055);