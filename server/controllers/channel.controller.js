const Channel = require('../models/Channel');

module.exports = {
	channelMessage: (req, res) => {
		Channel.find({}, (err, data) => {
			console.log(data);
			if (!err)
				return res.status(200).json({
					status: true,
					data
				});
		});
	},

	//Not required Can be Done With Socket
	addMessage: (req, res) => {
		Channel.create(req.body, (err) => {
			if (!err)
				return res.status(200).json({
					status: true,
					message: 'Channel Message Saved'
				});
		});
	}
};
