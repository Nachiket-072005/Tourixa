const mongoose = require('mongoose');
const travellerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true, 
	}
);

module.exports = mongoose.model('traveller', travellerSchema);
