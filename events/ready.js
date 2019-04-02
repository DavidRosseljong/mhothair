module.exports = (client) => {

  const { connect } = require('../inc/connection');

  connect();

  console.log('Login initiated. Please wait...');
  console.log('Connection successful.');
  console.log(`${client.user.username} is online.`);

  client.user.setActivity(`Serving ${client.guilds.size} servers and ${client.users.size} users.`);
};