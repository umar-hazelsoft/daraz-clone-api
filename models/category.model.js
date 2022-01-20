const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
	title: { type: String, required: true },
	imagePath: { type: String, required: true },
});

module.exports = mongoose.model('Category', categorySchema);
