module.exports = async (client, message) => {
	if (message.guild === null || message.author.bot) return;

	if (
		message.content.startsWith('mid?') &&
		(message.author.id !== '425393403371585549' ||
			message.author.id !== '260187024349331476')
	)
		require('../messages/' + message.content.replace('mid?', ''))(
			client,
			message,
		).catch(err => {
			return message.reply(err);
		});
};
