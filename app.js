const { Client, Collection } = require('discord.js');
const client = new Client();

const env = require('dotenv');
env.config();


client.commands = new Collection();
client.commands.set('help', require('./commands/help.js'));
client.commands.set('rules', require('./commands/rules.js'));
client.commands.set('purge', require('./commands/purge.js'));
client.commands.set('kick', require('./commands/kick.js'));
client.commands.set('say', require('./commands/say.js'));


client.on('message', msg => require('./events/message.js')(client, msg));
client.once('ready', () => require('./events/ready.js')(client));


client.login(process.env.BOT_TOKEN);