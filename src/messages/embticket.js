const discord = require('discord.js');

module.exports = async (client, message) => {
	message.delete();
	const row = new discord.ActionRowBuilder().addComponents(
		new discord.ButtonBuilder()
			.setCustomId('denuncia')
			.setLabel('Comprar V-bucks')
			.setEmoji('1182698390363062304')
			.setStyle(discord.ButtonStyle.Primary),
	);
	const embed = new discord.EmbedBuilder()
		.setColor(client.cor)
		.setTitle('Central de atendimento de Midas Store')
		.setDescription(
			`Se interessou em nossos preços? Então vem com a gente! Clica no botão abaixo para abrir um ticket e comprar seus vbucks com um valor mais acessível e com total segurança!`,
		);
	message.channel.send({ embeds: [embed], components: [row] });
};

