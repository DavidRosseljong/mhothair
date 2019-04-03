module.exports.run = async (client, msg, args) => {

  const { settings } = require('../inc/settings');
  const { get_xp, delete_xp } = require('../inc/connection');

  if (settings.enabled_xp) {

    // Deleting the command from the bot after output
    await msg.delete()
      .catch(err => {
        console.error('Unable to delete !xp command.', err);
      });

    // Turn args into string
    const argsToString = args.toString();


    // If no args, use !xp command to get xp.
    if (argsToString === '') return get_xp(msg, args);
    // If 'del' args, use !xp del command to delete xp.
    if (argsToString === 'del' && args !== '') return delete_xp(msg, args);

    msg.delete(10000)

  };
};