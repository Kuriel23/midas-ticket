module.exports = (client, interaction) => {
	if (interaction.isButton()) {
		require('../buttons/' + interaction.customId)(client, interaction);
	}
};
