const discord = require('discord.js');

module.exports = async (client, interaction) => {
	const button = new discord.ActionRowBuilder().addComponents(
		new discord.ButtonBuilder()
			.setCustomId('cct')
			.setLabel('Confirmo minha escolha')
			.setStyle(discord.ButtonStyle.Primary),
	);
	interaction
		.reply({
			content: `Gostaria de confirmar o encerramento do seu ticket?`,
			components: [button],
		})
		.then(msg => {
			setInterval(() => msg.delete(), 45000);
		});
};

