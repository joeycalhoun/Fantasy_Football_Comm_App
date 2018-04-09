var mongoose = require("mongoose");

var optionSchema = new mongoose.Schema({
	label:String
});

module.exports = mongoose.model("Option", optionSchema);