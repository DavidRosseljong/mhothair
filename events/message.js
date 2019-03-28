module.exports = (client, msg) => {

  // Importing settings
  const { settings } = require('../inc/settings');

  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let messageArray = msg.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(settings.bot_prefix)) return;

  let cmd = client.commands.get(command.slice(settings.bot_prefix.length));

  if (cmd) cmd.run(client, msg, args);
};