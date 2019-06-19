const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ChannelSchema = new Schema(
	{
		fromUser: { type: ObjectId, ref: 'User', required: true },
		message: String,
		sentiment: { type: String, default: 'N/A' } //SAD,HAPPY,NEUTRAL,N/A are available Sentiments
	},
	{ timestamps: true }
);

const Channel = mongoose.model('Channel', ChannelSchema);

module.exports = Channel;
