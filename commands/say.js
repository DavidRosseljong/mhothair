module.exports = (client, msg, args) => {

  let messageArray = msg.content.split(/\s+/g);
  let args = messageArray.slice(1);

  const message = args.join(" ");

  msg.delete().catch(O_o=>{});

  msg.channel.send(message);

};