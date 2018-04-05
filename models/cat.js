var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.findAll = function (cb) {
	db.find({}, function (err, docs) {
		if (err) {
			console.log(err);
		}
		return cb(err, docs);
	})	
};

exports.deleteOne = function (id, cb) {
	db.remove( {_id : ObjectID( id ) }, function (err, result) {
		if (err) {
			console.log(err);
		}
		cb(err, result);
	})	
};

exports.add = function (data, cb) {
	newCat = new db({ name: data });
	newCat.save( newCat , function (err, result) {
		if (err) {
			console.log(err);
		}
		cb(err, result);
	});	
};

exports.rename = function (id, newData, cb) {
	db.findByIdAndUpdate(
		{_id : ObjectID(id)}, 
		{ $set: { name: newData }},
		function (err, result) {
			if (err) {
				console.log(err);
			}
		cb(err, result);
	});	
};