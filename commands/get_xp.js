module.exports.run = async (client, msg, args) => {

  const { get_xp, delete_xp } = require('../inc/connection');

  get_xp(msg, args);

  delete_xp(msg, args);

};