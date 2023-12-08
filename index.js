const discord = require('discord.js');
require('dotenv').config();

const client = new discord.Client({
	intents: 3276799,
	cacheWithLimits: {
		MessageManager: {
			sweepInterval: 300,
			sweepFilter: discord.Sweepers.filterByLifetime({
				lifetime: 60,
				getComparisonTimestamp: m =>
					m.editedTimestamp ?? m.createdTimestamp,
			}),
		},
	},
});

client.cor = '#5865f2';
client.canais = {
	errors: '1147958842580279336',
};

process.on('unhandledRejection', error => {
	console.log(error);
});
process.on('uncaughtException', error => {
	console.log(error);
});

const boilerplateComponents = async () => {
	await require('./src/util/boilerplateClient')(client);
};

boilerplateComponents();
