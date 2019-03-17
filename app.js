const Discord = require('./node_modules/discord.js');
const config = require('./config.json');
const client = new Discord.Client();


client.config = config;
client.commands = new Discord.Collection();


client.commands.set('help', require('./commands/help.js'));
client.commands.set('rules', require('./commands/rules.js'));
client.commands.set('purge', require('./commands/purge.js'));
client.commands.set('kick', require('./commands/kick.js'));
//client.commands.set('react', require('./commands/react.js'));



client.on('message', msg => require('./events/message.js')(client, msg));
client.once('ready', () => require('./events/ready.js')(client));


//client.login(config.key);
client.login(process.env.BOT_TOKEN);