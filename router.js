var express = require("express");
var Router = express.Router();
var catController = require('./controllers/cat');

Router.route("/")
	.get( catController.findAll );

Router.route("/delete")
	.delete( catController.deleteOne );


Router.route("/add")
	.post( catController.add );

Router.route("/rename")
	.post( catController.rename );

module.exports = Router; 