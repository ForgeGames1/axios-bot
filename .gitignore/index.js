const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const PREFIX = "z!";
const EVERYONE = "@";
const YouTube = require("simple-youtube-api")

var client = new Discord.Client();

const youtube = new YouTube("AIzaSyDE684AY4Th50yKvN7lZ9GroJiFvF5yjy8");

const queue = new Map();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
  bot.user.setGame("AxiosBot | " + bot.users.size + " Membres !", "https://www.twitch.tv/axiosbot")

    
    bot.user.setUsername("AxiosBot | V1")
    console.log("*``*___*``*");
    console.log("AxiosBot - Connecté");
        console.log("*``*___*``*");
});

bot.login(process.env.TOKEN);
