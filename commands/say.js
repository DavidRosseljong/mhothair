module.exports.run = async (client, msg, args) => {

  const newMessage = args.join(" ");

  msg.delete().catch(O_o=>{});

  msg.channel.send(newMessage);

};