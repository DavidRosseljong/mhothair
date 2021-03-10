const firstMessage = require('./embeds/first-message')

module.exports = (client) => {
  const channelId = '819202903428169779'

  const emojis = {
    "🧟‍♂️": 'Raid',
    "🧙‍♂️": 'Social',
  }


  const emojiText = 'Um in der Gilde alle Member zu managen, wähle bitte deine Rolle aus.\nDies erleichert die Rollenverteilung im Spiel und wir können so auch eine feste Raidgruppe aufbauen.\n\nBist du 100% an beiden Raidtagen anwesend? Dann wähle den Raid-Emoji.\nWenn du gerne für alles Andere (Mythics, PvP, ... ) in der Gilde bist, dann wähle den Social-Emoji.\n\n🧟‍♂️ = Raid\n🧙‍♂️ = Social\n\n'

  firstMessage(client, channelId, emojiText, ["🧙‍♂️", "🧟‍♂️"])

  const handleReaction = (reaction, user, add) => {
    if (user.id === '542667050917691404') {
      return
    }

    const name = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[name]
    console.log(roleName);
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}