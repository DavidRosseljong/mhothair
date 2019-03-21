module.exports.run = async (client, msg, args) => {

	// Requiring Discord for RichEmbeds
	const { RichEmbed } = require('discord.js');

	// Delete Message
	await msg.delete()
		.catch(err => {
			console.log('Unable to delete message in rules command', err)
		});

	// Rules
	const rules = new RichEmbed()
		.setTitle(`~ ${msg.guild.name} Rules ~`)
		.setDescription('Please follow our guidelines to have an awesome time together.')
		.addField('1.', 'Do not spam channels or harass other members of the server. Along with that, no posting NSFW content in any channels.')
		.addField('2.', 'Use each channel for its respective purpose.')
		.addField('3.', "Do not post any content or engage in any actions that violate Discord's Terms of Service: https://discordapp.com/terms")
		.addField('4.', 'Do not advertise in any form unless specifically allowed in a channel or by the discretion of server staff.')
		.addField('5.', 'If you need help use !help, ask in the #support channel or write @Valixx a message.')
		.addBlankField()
		.setFooter('Please accept our guidelines and unlock the channels.');
		
	// Get Roles
	const role_registered = msg.guild.roles.find( role => role.name === "Registered");

	// Filter
	const filter = (reaction, user) => ['✅', '❎'].includes(reaction.emoji.name) && user.id === msg.author.id;

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
							.then(m => m.delete(15000));
						
						break;

					case '❎':
						// In case user does not want the role
            msg.channel.send("You declined to obey the rules. You'll not see any Channels")
              .then(m => m.delete(15000));
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