const settings = {

  // Enabling or disabling commands.
  enabled_kick: true, // BOOLEAN - TRUE OR FALSE
  enabled_say: true, // BOOLEAN - TRUE OR FALSE
  enabled_rules: true, // BOOLEAN - TRUE OR FALSE
  enabled_purge: true, // BOOLEAN - TRUE OR FALSE
  enabled_help: true, // BOOLEAN - TRUE OR FALSE

  // Role to give if rules are accepted
  role_accepted_rules: 'Registered', // STRING - USE TEXT

  // Bot Prefix
  bot_prefix: '!' // STRING - USE TEXT

};

module.exports.settings = settings;