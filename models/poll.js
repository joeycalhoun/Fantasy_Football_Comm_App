var mongoose = require("mongoose");

var pollSchema = new mongoose.Schema({
	question:String,
	options:[
		{
			type: mongoose.Schema.Types.ObjectId,
			ref:"Option"
		}
	]

});

module.exports = mongoose.model("Poll", pollSchema);