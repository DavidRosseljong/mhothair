module.exports.run = async (client, msg, args) => {

  // Require Modules and other
  const ytdl = require('ytdl-core');
  const { settings } = require('../inc/settings');

  // Check if command is enabled
  if (!settings.enabled_music) return false;

  // Check for args
  if (!args[0]) return msg.channel.send('Use !music "yt-link" or !music stop to command the bot.');
  if (args[0] === 'stop') return stop();

  // Check if user is in a voice channel
  if (!msg.member.voiceChannel) return msg.channel.send("I'm sorry. You're not in a voice channel.");

  // Check permissions
  const permissions = msg.member.voiceChannel.permissionsFor(msg.client.user);

  if (!permissions.has('CONNECT'))
    return msg.channel.send('I cannot connect to the voice channel. Please set the permissions accordingly.');

  if (!permissions.has('SPEAK'))
    return msg.channel.send('I cannot speak in this voice channel. Please set the permissions accordingly.');

  // Try to connect if everything went ok
  try {

    // Connect voice channel
    const connection = await msg.member.voiceChannel.join();

    // Play link
    const dispatcher = connection.playStream(ytdl(args[0]))
      .on('end', () => {
        msg.member.voiceChannel.leave();
        let msg = msg.channel.send('Song is over. Leaving the channel and waiting for your command.');
        msg.delete(10000);

      })
      .on('error', err => {
        console.error('Error occured when trying to play a youtube link\n', err);
      });

    // Set Volume
    dispatcher.setVolume(0.2);

  } catch (err) {
    console.error('Something went wrong trying to connect\n', err);
  }

  // Stop function
  function stop() {

    if (!msg.member.voiceChannel) {
      return msg.channel.send('You are not in a voice channel');
    } else {
      return msg.member.voiceChannel.leave();
    }

  }

}