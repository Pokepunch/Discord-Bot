const Discord = require("discord.js");
const bot = new Discord.Client();
const auth = require("auth.js");

var lennyTriggers = ["ass",
					"tits",
					"boob",
					"boobs",
					"butt",
					"nipples",
					"lenny"];

const prefix = "!";
const buzzfeed = "https://www.buzzfeed.com"

bot.on("ready", () => {
	console.log("I am ready!");
});

bot.on("message", (message) => {
	if (!message.content.startsWith(prefix))
	{
		var str = message.content.toLowerCase();
		if (lennyTriggers.some(function(v) { return str.indexOf(v) >= 0; }))
		{
			message.channel.send("( ͡° ͜ʖ ͡°)");		
		}
		if (str === "shrug")
		{
			message.channel.send("﻿¯\\_(ツ)_/¯");	
		}
		if (str.includes(buzzfeed))
		{
			message.channel.send("No Buzzfeed shit.");
			message.delete(1);
		}
	}


	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command == ("9/11")) 
	{
		message.channel.send("https://www.youtube.com/watch?v=QX1SojKfgNI");
	}
});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
	let newUserChannel = newMember.voiceChannel;
	let oldUserChannel = oldMember.voiceChannel;


	if (oldUserChannel === undefined && newUserChannel !== undefined) 
	{
		// User Joins a voice channel
		if (newMember.id == 109400160093601792)
		{
			console.log("The maker joined a voice channel!");
			newUserChannel.join()
			console.log("I'll join too!");
		}

	} else if (newUserChannel === undefined){

		// User leaves a voice channel
		if (oldMember.id == 109400160093601792)
		{
			console.log("The maker left a voice channel!");
			oldUserChannel.leave();
			console.log("I'll leave too!");
		}
	}
})

bot.login(auth.token);