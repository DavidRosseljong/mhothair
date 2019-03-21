// Requiring Discord for RichEmbeds
const { RichEmbed } = require('discord.js');

// Social Media
const socialMedia = new RichEmbed()
    .setTitle('Social Media')
    .setColor(0x00AE86)
    .addBlankField()
    .addField('Facebook', 'www.facebook.com/ValixxOnline')
    .addField('Twitter', 'www.twitter.com/ValixxOnline')
    .setFooter(Math.floor(Date.now()));

// Mod Links
const modLinks = new RichEmbed()
    .setTitle('Mod Links Part One')
    .setColor(0x00AE86)
    .addBlankField()
    .addField('RIFT', '----------')
    .addField('MofixUI', 'www.riftui.com/downloads/info93-MofiXUI.html')
    .addField('Notepad Reloaded', 'www.riftui.com/downloads/info482-NotepadReloaded.html')
    .addBlankField()
    .addField('LIF: Forest Village', '----------')
    .addField('More Wood per Tree', 'www.valixx-online.de/more-wood-per-tree')
    .addField('Barn & Warehouse Capacity', 'www.valixx-online.de/barn-warehouse-capacity')
    .addField('Ultimate Fishing', 'www.valixx-online.de/ultimate-fishing')
    .addField('Ultimate Discovery', 'www.valixx-online.de/ultimate-discovery')
    .addField('Warm Nights', 'www.valixx-online.de/warm-nights')
    .addBlankField()
    .addField('Cities: Skylines', '----------')
    .addField('Upgraded Prison', 'www.steamcommunity.com/sharedfiles/filedetails/?id=933829321')
    .addField('Relaxing Garden', 'www.steamcommunity.com/sharedfiles/filedetails/?id=932405632')
    .addBlankField()
    .addField('Arma 3', '----------')
    .addField('Sniper Firing Range', 'www.steamcommunity.com/sharedfiles/filedetails/?id=174869187')
    .setFooter(Math.floor(Date.now()));

const modLinks2 = new RichEmbed()
    .setTitle('Mod Links Part Two')
    .setColor(0x00AE86)
    .addBlankField()
    .addField('TESV: Skyrim', '----------')
    .addField('Essential Housecarls', 'www.nexusmods.com/skyrim/mods/48478')
    .addField('Hearthfire Items Chest', 'www.nexusmods.com/skyrim/mods/33508')
    .addField('Honey Moon Hall', 'www.nexusmods.com/skyrim/mods/31462')
    .addField('Improved Lower Hrothgar', 'www.nexusmods.com/skyrim/mods/49037')
    .addField('Monaghan Camp', 'www.nexusmods.com/skyrim/mods/32927')
    .addField('Archery Neck and Ring for Hunters', 'www.nexusmods.com/skyrim/mods/33637')
    .setFooter(Math.floor(Date.now()));


// Help Keywords
const helpKeyWords = new RichEmbed()
    .setTitle('Keywords')
    .setColor(0x00AE86)
    .setDescription('Please use any of the keywords below.')
    .addBlankField()
    .addField('Social Media', 'social')
    .addField('A List of all my mods', 'mods')
    .setFooter(Math.floor(Date.now()));

module.exports = { socialMedia, modLinks, modLinks2, rules, helpKeyWords }