const PrivateMessage = require('../models/DirectMessage');

module.exports = {
	privateMessage: (req, res) => {
		const { toUser, fromUser } = req.body;
		PrivateMessage.find(
			{
				$or: [
					{ $and: [ { toUser: toUser }, { fromUser: fromUser } ] },
					{ $and: [ { toUser: fromUser }, { fromUser: toUser } ] }
				]
			},
			(err, DMsg) => {
				const data = {
					users: [ toUser, fromUser ],
					messages: DMsg.filter((v) => !v.isDeleted)
				};
				if (!err)
					return res.status(200).json({
						status: true,
						data
					});
			}
		);
	},

	addPrivateMessage: (req, res) => {}
};
