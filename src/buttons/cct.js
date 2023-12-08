module.exports = async (client, interaction) => {
	interaction
		.reply(
			`\\🔒 |${interaction.user}, esse ticket será arquivado em \`5 segundos\`...`,
		)
		.then(() => {
			setTimeout(() => {
				interaction.channel.setArchived(true);
			}, 5000);
		});
};
