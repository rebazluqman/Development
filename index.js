const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');




const prefix = "" //prefix e bot dabni

const prefix = "" //prefix e bot dabni 
const developers = "" // id  acwnte xot dabni



const prefix = "-" //
const developers = "667123748838572042" //


client.login("");//tokne bot dabne
client.login("ODc4MzY2MDgyNjk4NzI3NTE2.YSAIKQ.ojFbiHcZ1I9VCTxmcIIlV3pRSG8");//
