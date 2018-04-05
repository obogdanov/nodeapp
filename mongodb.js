const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log(kitty));
Cat.find({}, function (err, res) {
	// console.log(res);
})

module.exports = Cat;