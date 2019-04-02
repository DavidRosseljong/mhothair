const mysql = require('mysql');
const { generate_xp } = require('./generate_xp');

let connection = null;


function connect() {
  connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 100
  });
};

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
}

function get_xp(msg, args) {

  let target = msg.mentions.users.first() || msg.guild.members.get(args[1]) || msg.author;

  connection.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
    if (err) throw err;

    if (!rows[0]) return msg.channel.send('This User has not gathered any XP.');

    let xp = rows[0].xp;
    msg.channel.send(xp);
  });

}

module.exports = { connect, query, get_xp };