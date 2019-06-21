const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const DirectMessageSchema = new Schema(
	{
		toUser: { type: ObjectId, ref: 'User', required: true },
		fromUser: { type: ObjectId, ref: 'User', required: true },
		message: String,
		sentiment: { type: String, default: 'N/A' }, //SAD,HAPPY,NEUTRAL,N/A are available Sentiments
		isRead: { type: Boolean, default: false },
		isDeleted: { type: Boolean, default: false },
		Counter: Number
	},
	{ timestamps: true }
);

const DirectMessage = mongoose.model('DirectMessage', DirectMessageSchema);

module.exports = DirectMessage;
