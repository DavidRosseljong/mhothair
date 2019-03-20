module.exports.run = async (client, msg, args) => {

  // Requiring Discord for RichEmbeds
  const Discord = require('discord.js');
  
  //Message to send | Help Keywords
  const helpKeywords = new Discord.RichEmbed()
    .setTitle('Keywords')
    .setDescription('Please use any of the keywords below.')
    .addBlankField()
    .addField('Social Media', 'social')
    .addField('A List of all my mods', 'mods')
    .setTimestamp()

  //Message to send | Social Media Links
  const socialMedia = new Discord.RichEmbed()
    .setTitle('Social Media')
    .addBlankField()
    .addField('Facebook', 'www.facebook.com/ValixxOnline')
    .addField('Twitter', 'www.twitter.com/ValixxOnline')
    .setTimestamp()

  //Message to send | Mod Links
  const modLinks = new Discord.RichEmbed()
    .setTitle('Mod Links')
    .addBlankField()
    .addField('RIFT', '----------')
    .addField('MofixUI', 'www.facebook.com/ValixxOnline')
    .addField('Notepad Reloaded', 'www.twitter.com/ValixxOnline')
    .addBlankField()
    .addField('LIF: Forest Village', '----------')
    .addField('More Wood per Tree', 'www.valixx-online.de/more-wood-per-tree')
    .setTimestamp()

  // Deleting the command from the bot after output
  await msg.delete().catch(O_o => {});

  // Output a list of keywords
  msg.reply(helpKeywords);

  // Waiting for the keywords
  await msg.channel.awaitMessages(message => {

    // Convert the keywords to lowercase
    switch(message.content.toLowerCase()) {

      // In case of the social keywords, output the social embed
      case 'social':
        msg.reply(socialMedia);
        break;

      // In case of the mod keywords, output the mod embed
      case 'mods':
        msg.reply(modLinks);
        break;

    };

    message.delete(30000);

  }).catch(console.error);

};