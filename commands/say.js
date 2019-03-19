module.exports = (client, msg, args) => {

  const message = args.join(" ");

  msg.delete().catch(O_o=>{});

  msg.channel.send(message);

}