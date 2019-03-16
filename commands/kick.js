module.exports.run = async (client, msg, args) => {

    if( !msg.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name)) )
      return msg.reply("Sorry, you don't have permissions to use this!");
    
    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);

    if( !member )
      return msg.reply("Please mention a valid member of this server.");

    if( !member.kickable ) 
      return msg.reply("I can not kick this user! Do they have a higher role? Do I have kick permissions?");
    
    let reason = args.slice(1).join(' ');

    if( !reason ) reason = "No reason provided.";
    

    await member.kick(reason)
      .catch(error => msg.reply(`Sorry ${msg.author} I couldn't kick because of : ${error}.`));

    msg.reply(`${member.user.tag} has been kicked by ${msg.author.tag} because: ${reason}.`);

    msg.delete(15000);
}