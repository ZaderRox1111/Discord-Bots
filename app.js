const Discord = require('discord.js');
require('dotenv').config();

//global variables
const client = new Discord.Client();

//swears array
var swears = ["ASS", "ASSHOLE", "BASTARD", "BITCH", "BULLSHIT", "CHRIST", "COCKSUCKER", "COCK", "CUNT", "DAMN", "DOGSHIT", "DUMBASS", "FUCK", "FUCKER", "GODDAMN", "HELL", "HORSESHIT", "JESUS", "MOTHERFUCKER", "PISS", "SHIT", "SHITASS", "SLUT", "WHORE"];
//bible messages array
var verses = [
"\"But each one is tempted when he is drawn away by his own desires and enticed. Then, when desire has conceived, it gives birth to sin; and sin, when it is full-grown, brings forth death.\" James 1:14-15",
"\"No temptation has overtaken you except such as is common to man; but God is faithful, who will not allow you to be tempted beyond what you are able, but with the temptation will also make the way of escape, that you may be able to bear it.\" 1 Corinthians 10:13",
"\"I say then: Walk in the Spirit, and you shall not fulfill the lust of the flesh. For the flesh lusts against the Spirit, and the Spirit against the flesh; and these are contrary to one another, so that you do not do the things that you wish.\" Galatians 5:16-17"
];

//send a console message to let me know it is ready
client.on('ready', () => {
  console.log('Bot is ready');
});

//login the bot
client.login(process.env.BOT_TOKEN)

//do things based off of messages
client.on('message', (msg) => {
  //splits the array into the words
  msgArray = msg.content.split(" ");

  //runs through the message and checks each word
  //checks if the word is in the swears array
  for(var index = 0; index < msgArray.length; index++){
    if(swears.includes(msgArray[index].toUpperCase())){
      msg.reply(verses[Math.floor(Math.random() * verses.length)]);
    }
  }
});

