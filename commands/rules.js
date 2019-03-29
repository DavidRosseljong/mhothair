module.exports.run = async (client, msg, args) => {

	/*
	 *
	 * Declarations
	 * 
	 */

	// Requiring Discord for RichEmbeds
	const { RichEmbed } = require('discord.js');
	// Importing settings
	const { settings } = require('../inc/settings');
	// Get Roles
	const role_to_give = msg.guild.roles.find(role => role.name === settings.role_accepted_rules);

	/*
	 *
	 * Embeds
	 * 
	 */

	const rules = new RichEmbed()
		.setTitle(`~ ${msg.guild.name} Rules ~`)
		.setDescription('Please follow our guidelines to have an awesome time together.')
		.setColor(0x00AE86)
		.addField('1.', 'Do not spam channels or harass other members of the server. Along with that, no posting NSFW content in any channels.', true)
		.addField('2.', 'Use each channel for its respective purpose.', true)
		.addField('3.', "Do not post any content or engage in any actions that violate Discord's Terms of Service: https://discordapp.com/terms", true)
		.addField('4.', 'Do not advertise in any form unless specifically allowed in a channel or by the discretion of server staff.', true)
		.addField('5.', 'If you need help use !help, ask in the #support channel or write @Valixx a message.', true)
		.addBlankField()
		.setFooter('Please accept our guidelines and unlock the channels.');

	const agreedRules = new RichEmbed()
		.setTitle('Thanks for agreeing with our rules.')
		.setColor(0x00AE86)
		.setDescription(`You have been added to the ${role_to_give.name}. If you need help, please use !help and you'll receive further instructions.`)
		.addBlankField()
		.setTimestamp()

	/*
	 *
	 * Main Code
	 * 
	 */

  // Check if settings are enabled
  if (settings.enabled_rules) {

		// Delete command immediately
		await msg.delete()
			.catch(err => {
				console.log('Unable to delete message in rules command', err)
			});

		// Filter the reactions
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
					time: 60000,
					errors: ['time']
				})
				.then(collected => {
					
					// Get the reaction
					const reaction = collected.first()

					// Check Emoji
					switch(reaction.emoji.name) {
						case '✅':

							// Add role and check for error
							msg.member.addRole(role_to_give)
								.catch(err => { 
									console.error(err)
									return msg.channel.send('Error');
								});

							// Send message that the user has been added to the role.
							msg.member.createDM().then(channel => {
								channel.send(agreedRules)
							});
							
							break;

						case '❎':
							// In case user does not want the role
							msg.channel.send("You declined our rules. You'll not see any hidden channels.")
								.then(m => m.delete(15000));
							break;
					}
					message.delete(60000)
				})
				.catch(err => {
					console.error(err);
					msg.channel.send('You have not reacted. Message will self destruct!')
						.then(m => m.delete(10000))
				});

			});
		
	};
				
};