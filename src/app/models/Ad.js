const mongoose = require('mongoose')

const Ad = new mongoose.Schema({
	title:{
		type: String,
		require: true
	},
	description:{
		type: String,
		required: true
	},
	author:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		require: true
	},
	price:{
		type: Number,
		required: true
	},
	createdAt:{
		type: Date,
		default: Date.now
	}
})
