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

// Help Keywords
const helpKeyWords = new RichEmbed()
    .setTitle('Keywords')
    .setDescription('Please use any of the keywords below.')
    .addBlankField()
    .addField('Social Media', 'social')
    .addField('A List of all my mods', 'mods')
    .setFooter(Math.floor(Date.now()));

module.exports = { socialMedia, modLinks, rules, helpKeyWords }