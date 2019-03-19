module.exports.run = async (client, msg, args) => {

  // Saving the message from user
  const newMessage = args.join(" ");

  // Deleting the command
  msg.delete().catch(O_o=>{});

  // Send the message to the channel as bot
  msg.channel.send(newMessage);

};