module.exports.run = async (client, msg, args) => {

  // Import Embeds
  const { helpKeywords, socialMedia, modLinks } = require('../inc/embeds/embeds')

  // Deleting the command from the bot after output
  await msg.delete()
    .catch(err => {
      console.error('Unable to delete message in help command', err);
    });

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

  }).then(message => {
    message.delete(30000);
  }).catch(err => {
    console.error('Unable to delete message after 30 seconds in help command', err);
  });

};