module.exports.run = async (client, msg, args) => {

  const Discord = require('discord.js');

	// Delete Message
	await msg.delete()
		.catch(console.error);
		
	// Get Roles
	const role_registered = msg.guild.roles.find( role => role.name === "Registered");

	// Filter
	const filter = (reaction, user) => ['✅', '❎'].includes(reaction.emoji.name) && user.id === msg.author.id;

	// Message or Embed  
  const rules = new Discord.RichEmbed()
    .setTitle(`### ${msg.guild.name} Rules ###`)
		.setDescription('Please follow our guidelines to have an awesome time together.')
		.setDescription('1. Lorem Ipsum Dolor Sit Amet')
		.setDescription('2. Lorem Ipsum Dolor Sit Amet')
    .addBlankField()
    .setFooter('Please accept our guidelines and unlock the channels.')

	// Send Message
	msg.channel.send(rules)
		.then(async message => {

			// React to message
			await message.react('✅')
			await message.react('❎')

			// Wait for reaction
			message.awaitReactions(filter, {
				max: 1,
				time: 25000,
				errors: ['time']
			})
			.then(collected => {
				
				// Get the reaction
				const reaction = collected.first()

				// Check Emoji
				switch(reaction.emoji.name) {
					case '✅':

						// Add role and check for error
						msg.member.addRole(role_registered)
							.catch(err => { 
								console.error(err)
								return msg.channel.send('Error');
							});

						// Send message that user has been added to the role, then delete it after 10 seconds
						msg.channel.send(`You agreed to obey the rules. You have been added to the **${role_registered.name}** role!`)
							.then(m => m.delete(5000));
						
						break;

					case '❎':
						// In case user does not want the role
            msg.channel.send("You declined to obey the rules. You'll not see any Channels")
              .then(m => m.delete(5000));
						break;
        }
        message.delete(30000)
			})
			.catch(err => {
        console.error(err);
        msg.channel.send('You have not reacted. Message will self destruct!')
          .then(m => m.delete(15000))
        message.delete(30000);
      });

    });
				
};