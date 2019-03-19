module.exports.run = async (client, msg, args) => {

  await msg.delete().catch(O_o => {});

  msg.reply('In what matter do you need assistance?');

    if (msg.startsWith('Social')) {

      const embed = new Discord.RichEmbed()
        .settitle('Social Media')
        .addBlankField()
        .addField('Facebook', 'www.facebook.com/ValixxOnline')
        .addField('Twitter', 'www.twitter.com/ValixxOnline')
        .setFooter(timestamp);



      msg.reply({ embed });

    }
  
  console.log('Working anyway.');

};