const mysql = require('mysql');
const { generate_xp } = require('./generate_xp');
const { settings } = require('../inc/settings');

let connection = null;

// Connect function with necessary information to connect.
// We are creating a pool so that the connection is open at all times.
// Check https://github.com/mysqljs/mysql#pooling-connections
function connect() {
  connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 100
  });
};

// Get connection and update/insert Database fields with new values.
function query(msg) {

  connection.getConnection(function(err, connection) {
    // We are not connected.
    if (err) throw err;

    // Using the connection
    connection.query(`SELECT * FROM xp WHERE id = '${msg.author.id}'`, (err, rows) => {
      if (err) throw err;

      // Insert or update the database with new id/xp amount.
      let sql;
      if (rows.length < 1) {
        sql = `INSERT INTO xp (id, xp) VALUES ('${msg.author.id}', ${generate_xp()})`;
      } else {
        let xp = rows[0].xp;
        sql = `UPDATE xp SET xp = ${xp + generate_xp()} WHERE id = '${msg.author.id}'`;
      };
      connection.query(sql);

      // Release the connection after we are done.
      connection.release();

    });
  });
};

// Get XP function for !xp command.
function get_xp(msg, args) {

  // Get the user whom to check for the XP amount.
  let target = msg.mentions.users.first() || msg.guild.members.get(args[1]) || msg.author;

  // Get the XP from the user
  connection.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
    if (err) throw err;

    // If the user is not in the database
    if (!rows[0]) return msg.channel.send('This user has not gathered any XP.');

    // Output the user XP amount.
    let xp = rows[0].xp;
    msg.channel.send(`You have ${xp} XP.`);
  });

};

// Delete XP function for !xp del command.
function delete_xp(msg, args) {

  // Check if user has specific roles
  if (!msg.member.roles.some(r => [settings.role_kick.admin, settings.role_kick.moderator, settings.role_kick.valixx_tv_admin].includes(r.name)))
    return msg.reply("Sorry, you don't have permissions to use this!");

  // Get the user whom to delete the XP amount.
  let target = msg.mentions.users.first() || msg.guild.members.get(args[1]) || msg.author;

  // Get the XP from the user
  connection.query(`SELECT * FROM xp WHERE id = '${msg.author.id}'`, (err, rows) => {
    if (err) throw err;
    
    if (rows.length < 1) {
      // If the user is not in the database
      msg.channel.send('You have not gathered any XP.')
    } else {
      // If there is a user, set the XP amount to zero.
      connection.query(`UPDATE xp SET xp = ${xp = 0} WHERE id = '${target.id}'`);
      msg.channel.send(`${msg.author}, your XP have been deleted.`);
    }
  });

};

module.exports = { connect, query, get_xp, delete_xp };