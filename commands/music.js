module.exports.run = async (client, msg, args) => {

   // Importing settings
  const { settings } = require('../inc/settings');
  // Importing ytdl-core
  const ytdl = require('ytdl-core');
  // Turn args into string
  const argsToString = args.toString();

  // Check if settings are enabled
  if (settings.enabled_music) {

    const voiceChannel = msg.member.voiceChannel;

    if (!voiceChannel) return msg.channel.send("I'm sorry. You're not in a voice channel.");

    const permissions = voiceChannel.permissionsFor(msg.client.user);

    if (!permissions.has('CONNECT')) {

      return msg.channel.send('I cannot connect to the voice channel. Please set the permissions accordingly.');

    };

    if (!permissions.has('SPEAK')) {

      return msg.channel.send('I cannot speak in this voice channel. Please set the permissions accordingly.');

    };

    try {
      var connection = await voiceChannel.join();
    } catch (error) {
      console.error(`I could not join because: ${error}`);
    };

    // Get the url and play the music
    const dispatcher = connection.playStream(ytdl(args[0]))
      .on('end', () => {
        console.log('The song has ended!');
      })
      .on('error', error => {
        console.error(error);
        console.log(args);
      });

    // Set the initial volume
    dispatcher.setVolume(0.2);

    // If the command is !music stop, then the bot leaves the channel
    if (argsToString === 'stop' && args !== '') {

      if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel');
      msg.member.voiceChannel.leave();
      return undefined;

    };
  
  };

};