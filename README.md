![Mhothair Discord Bot Banner](https://i.david-rosseljong.com/mhothair/banner.jpg)

[![Discord](https://img.shields.io/discord/472739529128804362.svg?label=Discord&style=flat-square)](https://discord.gg/mPKqEmT)
[![Github](https://img.shields.io/github/last-commit/davidrosseljong/mhothair.svg?style=flat-square)](https://github.com/DavidRosseljong/mhothair)
[![GitHub Dependencies](https://david-dm.org/davidrosseljong/mhothair.svg)](https://github.com/DavidRosseljong/mhothair)

## About Mhothair

Mhothair is a Discord Bot, still in development as new features are added on a regular basis.

## Commands

Prefix: !

* !help
* !rules
* !kick
* !xp
* !xp del
* !say
* !purge
* !music
* !music stop

## Settings

All settings can be changed in [./inc/settings.js](https://github.com/DavidRosseljong/mhothair/blob/master/inc/settings.js).

    const settings = {

      // Enabling or disabling commands.
      enabled_kick: true, // BOOLEAN - TRUE OR FALSE
      enabled_say: true, // BOOLEAN - TRUE OR FALSE
      enabled_rules: true, // BOOLEAN - TRUE OR FALSE
      enabled_purge: true, // BOOLEAN - TRUE OR FALSE
      enabled_help: true, // BOOLEAN - TRUE OR FALSE

      // Role to give if rules are accepted
      role_accepted_rules: 'Registered', // STRING - USE TEXT

      // Roles for kick command permission
      role_kick: {
        admin: 'Administrator',
        moderator: 'Moderator',

        // Only for my server, you can delete this.
        valixx_tv_admin: '👑 Admin'
      },

      // Bot Prefix
      bot_prefix: '!' // STRING - USE TEXT

    };

    module.exports.settings = settings;

## NPM Packages

Mhothair wouldn't be possible without your packages. Thanks!

* [discord.js](https://www.npmjs.com/package/discord.js) ( Discord API )
* [mysql](https://www.npmjs.com/package/mysql) ( MySQL Connections )
* [dotenv](https://www.npmjs.com/package/dotenv) ( Only for local environment )
* [node-opus](https://www.npmjs.com/package/node-opus) ( For the sound to work )
* [ytdl-core](https://www.npmjs.com/package/ytdl-core) ( To extract music from youtube-videos )

## Support & Requests

If you have an idea or need help, join me on [Discord](https://discord.gg/mPKqEmT).

## Social

* [Facebook](https://facebook.com/DavidRosseljong)
* [Twitter](https://twitter.com/DavidRosseljong)
* [Instagram](https://instagram.com/davidrosseljong)
* [Discord](https://discord.gg/mPKqEmT)