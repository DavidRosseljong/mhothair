module.exports.run = async (client, msg, args) => {

  const { get_xp } = require('../inc/connection');

  get_xp(msg, args);

};