module.exports.run = async (client, msg, args) => {

   // Importing settings
  const { settings } = require('../inc/settings');

  // Check if settings are enabled
  if (settings.enabled_say) {

    // Saving the message from user
    const newMessage = args.join(" ");

    // Deleting the command
    msg.delete().catch(O_o=>{});

    // Send the message to the channel as bot
    msg.channel.send(newMessage);
  
  };

};