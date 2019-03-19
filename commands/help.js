module.exports.run = async (client, msg, args) => {

  const Discord = require('discord.js');
  
  //Message to send
  const embed = new Discord.RichEmbed()
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