// Requiring Discord for RichEmbeds
const { RichEmbed } = require('discord.js');

// Social Media
const socialMedia = new RichEmbed()
    .setTitle('Social Media')
    .addBlankField()
    .addField('Facebook', 'www.facebook.com/ValixxOnline')
    .addField('Twitter', 'www.twitter.com/ValixxOnline')
    .setFooter(Math.floor(Date.now()));

// Mod Links
const modLinks = new RichEmbed()
    .setTitle('Mod Links')
    .addBlankField()
    .addField('RIFT', '----------')
    .addField('MofixUI', 'www.facebook.com/ValixxOnline')
    .addField('Notepad Reloaded', 'www.twitter.com/ValixxOnline')
    .addBlankField()
    .addField('LIF: Forest Village', '----------')
    .addField('More Wood per Tree', 'www.valixx-online.de/more-wood-per-tree')
    .setFooter(Math.floor(Date.now()));

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

// Help Keywords
const helpKeyWords = new RichEmbed()
    .setTitle('Keywords')
    .setDescription('Please use any of the keywords below.')
    .addBlankField()
    .addField('Social Media', 'social')
    .addField('A List of all my mods', 'mods')
    .setFooter(Math.floor(Date.now()));

module.exports = { socialMedia, modLinks, rules, helpKeyWords }