var Router = require("./router");
var bodyParser = require('body-parser');
var path = require('path');

function server() {

	var express = require("express");
 
	var app = express();

	app.set("view engine", "pug");

	app.use( bodyParser.json() );
	app.use( bodyParser.urlencoded({ extended : true }));

	app.use("/", Router);

	// Set Static Folder
	app.use(express.static(path.join(__dirname, 'assets')));
	
	app.listen(3000);
}

module.exports = server;