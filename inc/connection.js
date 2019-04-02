const mysql = require('mysql');
const { generate_xp } = require('./generate_xp');


function connection() {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  connection.connect(err => {
    if (err) throw err;
    console.log('Database connected.')
  });

  connection.query(`SELECT * FROM xp WHERE id = '${msg.author.id}'`, (err, rows) => {
    if(err) throw err;

    let sql;

    if(rows.length < 1) {
      sql = `INSERT INTO xp (id, xp) VALUES ('${msg.author.id}', ${generate_xp()})`;
    } else {
      let xp = rows[0].xp;
      sql = `UPDATE xp SET xp = ${xp + generate_xp()} WHERE id = '${msg.author.id}'`;
    };

    connection.query(sql);

  });
};

module.exports = { connection };