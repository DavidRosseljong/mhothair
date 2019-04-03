module.exports.run = async (client, msg, args) => {

  const { settings } = require('../inc/settings');
  const { get_xp, delete_xp } = require('../inc/connection');

  if (settings.enabled_xp) {

    // Turn args into string
    const argsToString = args.toString();


    // If no args, use !xp command to get xp.
    if (argsToString === '') return get_xp(msg, args);
    // If 'del' args, use !xp del command to delete xp.
    if (argsToString === 'del' && args !== '') return delete_xp(msg, args);

  };
};