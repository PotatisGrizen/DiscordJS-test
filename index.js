// https://discord.js.org/#/docs/main/stable/general/welcome

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', (msg) => {
  
  if(msg.content === 'Ping!') {
    msg.channel.send('Pong!');
  } 
  
  else if(msg.content === 'Potato') {
    msg.channel.send('🥔');
  } 
  
  else if(msg.content === 'Embed') {
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Some title')
      .setURL('https://discord.js.org/')
      .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      .setDescription('Some description here')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    msg.channel.send(exampleEmbed);
  }

})

client.login('TOKEN');