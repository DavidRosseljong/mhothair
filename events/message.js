const config = require('../config.json');
const prefix = config.prefix;

module.exports = (client, msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let messageArray = msg.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));

  if (cmd) cmd.run(client, msg, args);
};