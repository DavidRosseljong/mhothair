module.exports.run = async (client, msg, args, con) => {

  let target = msg.mentions.users.first() || msg.guild.members.get(args[1]) || msg.author;

  connection.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
    if (err) throw err;

    if (!rows[0]) return msg.channel.send('This User has not gathered any XP.');

    let xp = rows[0].xp;
    msg.channel.send(xp);
  });

};