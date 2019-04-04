module.exports.run = async (client, msg, args) => {

   // Importing settings
  const { settings } = require('../inc/settings');
  // Importing ytdl-core
  const ytdl = require('ytdl-core');

  // Check if settings are enabled
  if (settings.enabled_music) {

    // Check if user is in a voice channel.
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send("I'm sorry. You're not in a voice channel.");

    // Check if the permissions are correct
    const permissions = voiceChannel.permissionsFor(msg.client.user);

    if (!permissions.has('CONNECT')) {
      return msg.channel.send('I cannot connect to the voice channel. Please set the permissions accordingly.');
    };
    if (!permissions.has('SPEAK')) {
      return msg.channel.send('I cannot speak in this voice channel. Please set the permissions accordingly.');
    };

    // Try to connect to the voice channel.
    try {
      var connection = await voiceChannel.join();
    } catch (error) {
      console.error(`I could not join because: ${error}`);
    };

    if (args[0].startsWith('http') || args[0].startsWith('www') && args !== '') {

      // Get the url and play the music
      const dispatcher = connection.playStream(ytdl(args[0]))
        .on('end', () => {
          msg.channel.send('Song is over. Leaving the channel and waiting for your command.');
          msg.member.voiceChannel.leave();
          msg.delete(10000);
          return undefined;
        })
        .on('error', error => {
          console.error(error);
        });

      // Set the initial volume
      dispatcher.setVolume(0.2);

    };

    // If the command is !music stop, then the bot leaves the channel
    if (args[0] === 'stop' && args !== '') {

      if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel');
      msg.member.voiceChannel.leave();
      return undefined;

    };

    // Give some help
    if (!args[0]) {

      msg.channel.send('Use !music "yt-link" or !music stop to command the bot.');

    };

  };

};