module.exports.run = async (client, msg, args) => {

  const Embed = require('discord.js').RichEmbed();

  //Message to send
  const embed = new Embed()
    .settitle('Social Media')
    .addBlankField()
    .addField('Facebook', 'www.facebook.com/ValixxOnline')
    .addField('Twitter', 'www.twitter.com/ValixxOnline')
    .setFooter(timestamp);

  await msg.delete().catch(O_o => {});

  await msg.channel.awaitMessages(message => {
    console.log(msg.content);
  });

};