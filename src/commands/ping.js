const discord = require('discord.js');

module.exports = {
	data: new discord.SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping!')
		.setDefaultMemberPermissions(discord.PermissionFlagsBits.Administrator),
	async execute(interaction, client) {
		interaction.reply('Pong!');
	},
};

