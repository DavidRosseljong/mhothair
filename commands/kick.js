module.exports.run = async (client, msg, args) => {

  // Importing settings
  const { settings } = require('../inc/settings');
  
  // Check if settings are enabled
  if (settings.enabled_kick) {

    // 👑 Admin role for my server.
    if( !msg.member.roles.some(r => [settings.role_kick.admin, settings.role_kick.moderator, settings.role_kick.valixx_tv_admin].includes(r.name)) )
      return msg.reply("Sorry, you don't have permissions to use this!");

    // The user to kick
    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);

    // If no member is mentioned
    if( !member )
      return msg.reply("Please mention a valid member of this server.");

    // Check if the roles have permissions to kick user
    if( !member.kickable ) 
      return msg.reply("I can not kick this user! Do they have a higher role? Do I have kick permissions?");


    // Get the reason from the command. !kick "reason"
    let reason = args.slice(1).join(' ');
    // If no reason is provided, output default reason
    if( !reason ) reason = "No reason provided.";
    
    // Wait for the kick to happen
    await member.kick(reason)
      // Output an error if user can't be kicked
      .catch(error => msg.reply(`Sorry ${msg.author}, I couldn't kick because of : ${error}.`));

    // Output a message to the channel with information
    msg.reply(`${member.user.tag} has been kicked by ${msg.author.tag} because: ${reason}.`);

    // Delete the message after 15 seconds
    msg.delete(15000);

  } else {

    // If !kick command is disabled in settings, output default message.
    msg.reply('Kick Command has been disabled. Please check your settings.')

  };
};