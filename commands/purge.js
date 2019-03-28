module.exports.run = async (client, msg, args) => {
  // This command removes all messages from all users in the channel, up to 100.

  // Importing settings
  const { settings } = require('../inc/settings');
  
  // Check if settings are enabled
  if (settings.enabled_purge) {
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    await msg.delete()
      .catch(console.error);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return msg.reply("Please provide a number between 1 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await msg.channel.fetchMessages({limit: deleteCount});
    msg.channel.bulkDelete(fetched)
      .catch(error => msg.reply(`Couldn't delete messages because of: ${error}`));

  };

};