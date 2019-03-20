// Requiring Discord for RichEmbeds
const { RichEmbed } = require('discord.js');

// Keywords
export const helpKeyWords = new RichEmbed()
    .setTitle('Keywords')
    .setDescription('Please use any of the keywords below.')
    .addBlankField()
    .addField('Social Media', 'social')
    .addField('A List of all my mods', 'mods')
    .setTimestamp(Math.floor(Date.now()));

// Social Media
export const socialMedia = new RichEmbed()
    .setTitle('Social Media')
    .addBlankField()
    .addField('Facebook', 'www.facebook.com/ValixxOnline')
    .addField('Twitter', 'www.twitter.com/ValixxOnline')
    .setTimestamp(Math.floor(Date.now()));

// Mod Links
 export const modLinks = new RichEmbed()
    .setTitle('Mod Links')
    .addBlankField()
    .addField('RIFT', '----------')
    .addField('MofixUI', 'www.facebook.com/ValixxOnline')
    .addField('Notepad Reloaded', 'www.twitter.com/ValixxOnline')
    .addBlankField()
    .addField('LIF: Forest Village', '----------')
    .addField('More Wood per Tree', 'www.valixx-online.de/more-wood-per-tree')
    .setTimestamp(Math.floor(Date.now()));

// Rules
export const rules = new Discord.RichEmbed()
    .setTitle(`### ${msg.guild.name} Rules ###`)
    .setDescription('Please follow our guidelines to have an awesome time together.')
    .setDescription('1. Lorem Ipsum Dolor Sit Amet')
    .setDescription('2. Lorem Ipsum Dolor Sit Amet')
    .addBlankField()
    .setFooter('Please accept our guidelines and unlock the channels.');