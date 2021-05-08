const Discord = require('discord.js');
const {swearsHelper} = require('./helper.js');
require('dotenv').config();

//global variables
const client = new Discord.Client();

//send a console message to let me know it is ready
client.on('ready', () => {
	console.log('Bot is ready');
});

//login the bot
client.login(process.env.BOT_TOKEN)

function checkWords(msgArray, msg)
{
	//runs through the message and checks each word
	//checks if the word is in the swears array
	//if so it replies with a random bible verse from the bible array
	//do the same for racial slurs
	for(var index = 0; index < msgArray.length; index++){
        if(swearsHelper.swears.includes(msgArray[index].toUpperCase())){
        	msg.reply(swearsHelper.verses[Math.floor(Math.random() * swearsHelper.verses.length)]);
        	break;
        }
        if(swearsHelper.badSlurs.includes(msgArray[index].toUpperCase())){
        	msg.reply(swearsHelper.racistVerses[Math.floor(Math.random() * swearsHelper.racistVerses.length)]);
        	break;
        }
    }
}

//do things based off of messages
client.on('message', (msg) => {
    //splits the array into the words
	msgArray = msg.content.split(" ");

	checkWords(msgArray, msg);
}); 