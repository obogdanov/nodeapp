var Cat = require('../models/cat');
var catsArr = require('../catsArr');

exports.findAll = function (req, res) {
	Cat.findAll(function (err, docs) {

		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		console.log(req.url);
		res.render(
			"page.pug"
			, 
			{ docs }
		);
	})
};

exports.deleteOne = function (req, res) {
	Cat.deleteOne (req.body.id, function (err, result) {
		if (err) {
			console.log(err);
			return sendStatus(500);
		}
		res.sendStatus(200);
	}) 
};

exports.add = function (req, res) {
	Cat.add (req.body.name, function (err, result) {
		if (err) {
			console.log(err);
			return sendStatus(500);
		}
		res.sendStatus(200);
	}) 
};

exports.rename = function (req, res) {
	Cat.rename (req.body.id, req.body.name ,function (err, result) {
		if (err) {
			console.log(err);
			return sendStatus(500);
		}
		res.send(req.body.id);
	}) 
};