module.exports.run = async (client, msg, args) => {

  await msg.delete().catch(O_o => {});

  msg.reply('Command is working.');
};

// if (msg.content === config.prefix + ' help') {

//   msg.reply('Do you need help?');

//   if (msg.content === 'yes') {

//     const embed = new Discord.RichEmbed()
//       .settitle('In what category do you need assistance?')



//     msg.reply({
//       embed
//     });

//   }

// }