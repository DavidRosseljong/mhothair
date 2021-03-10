module.exports = async (client, channelId, text, reactions) => {

  

  if (channelId && reactions.length > 0 && text) {

    const channel = await client.channels.fetch(channelId);

    const message = await channel.send(text)

    reactions.map((reaction) => {
      message.react(reaction);
    });

  }
}