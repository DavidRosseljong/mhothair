const { Client, Collection } = require('discord.js');
const client = new Client();

const env = require('dotenv');
env.config();


client.commands = new Collection();
client.commands.set('help', require('./commands/help'));
client.commands.set('rules', require('./commands/rules'));
client.commands.set('purge', require('./commands/purge'));
client.commands.set('kick', require('./commands/kick'));
client.commands.set('say', require('./commands/say'));
client.commands.set('xp', require('./commands/xp'));
client.commands.set('play', require('./commands/music'));



client.on('message', msg => require('./events/message.js')(client, msg));
client.once('ready', () => require('./events/ready.js')(client));


client.login(process.env.BOT_TOKEN);