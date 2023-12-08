const discord = require('discord.js');

module.exports = async (client, interaction) => {
	interaction.deferReply({ ephemeral: true });
	const tagger = interaction.user.tag;

	const embed = new discord.EmbedBuilder()
		.setAuthor({
			name: interaction.guild.name,
			iconURL: interaction.guild.iconURL({
				dynamic: true,
			}),
		})
		.setColor(client.cor)
		.setDescription(
			`Olá, ${interaction.user}. Boas vindas ao seu ticket!\n\nPara facilitar o processo, por favor, diga o produto que você gostaria de comprar. Agradecemos sua colaboração.`,
		);

	const botao = new discord.ActionRowBuilder().addComponents(
		new discord.ButtonBuilder()
			.setCustomId('ct')
			.setEmoji('🔒')
			.setLabel('Fechar Ticket')
			.setStyle(2),
	);

	const fetchActiveThreads =
		await interaction.channel.threads.fetchActive(true);
	const findThread = fetchActiveThreads.threads.find(
		c => c.name === `${tagger} | Compra`,
	);
	if (findThread)
		return interaction.editReply({
			content: `Você já possui um ticket aberto em ${findThread}.`,
			ephemeral: true,
		});

	interaction.channel.threads
		.create({
			name: `${tagger} | Compra`,
			autoArchiveDuration: discord.ThreadAutoArchiveDuration.ThreeDays,
			reason: 'Atendimento criado.',
			type: discord.ChannelType.PrivateThread,
			invitable: false,
		})
		.then(c => {
			c.members.add(interaction.user.id);
			c.send({
				content: `<@425393403371585549> <@${interaction.user.id}>`,
				embeds: [embed],
				components: [botao],
			});
			return interaction.editReply({
				content: `Seu ticket foi aberto em ${c}.`,
				ephemeral: true,
			});
		})
		.catch(() => {
			return interaction.editReply({
				content: 'Ocorreu um erro. Tente novamente mais tarde.',
				ephemeral: true,
			});
		});
};
