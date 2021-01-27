  
 // كل البكجات الي ممكن تحتجها في اي بوت
var { Util } = require('discord.js');
const convert = require("hh-mm-ss")
const botversion = require('./package.json').version;
const moment = require("moment");
const fs = require('fs');
const ms = require("ms"  );
const dateFormat = require('dateformat');//npm i dateformat
const pretty = require("pretty-ms");
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

const Discord = require('discord.js'),
      client = new Discord.Client();

client.login("Nzk5NjIzNTg5NTAxOTkyOTcw.YAGRgA.UhqJnOyEaztbv49HAiFXJ7jYazo");  //توكن البوت
//-------------------

let prefix = '$',   //هنا تحط البرفكس
    devs = ['530795280464085012']  //الايدي بتاع حسابك

//-------------------

//-------------------

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------


  


let desin = '800122005155610694';// ايدي رتبة المصمم
let seller = '800122027079761960';// ايدي رتبة البائع
let cha2 = '800123340856492032';
let cha = '800122199364468746';// ايدي الروم اللى راح يرسل فيها الطلبات ويمنشن
let line = 'https://cdn.discordapp.com/attachments/775863077030592532/794631963843231744/530795280464085012.gif';//رابط الخط

client.on('message', async (message) => {
if(message.author.bot||!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ")
  
  
  
if(message.channel.id == '797801465971736676'){//ايدي الروم حق طلبات الاغراض .. حساب ماين الخ
  if(!message.content.split(" ")[1]) return message.delete(6000).then(()=> {message.channel.send('برجاء كتابة طلبك').then(a=>{a.delete(6000)}) })

if(message.content.toLowerCase().startsWith(prefix + 'طلب')){
message.channel.send(`**تم إرسال الطلب بنجاح , ${message.author}**`).then(a=> a.delete(60000))
  message.delete(250)
message.guild.channels.get(cha).send(`<@&${seller}>\n**الطلب من قبل : ${message.author}**`,new Discord.RichEmbed()
    .setColor('#0099ff')
    .setAuthor('ID: '+message.author.id, message.author.avatarURL)
    .setDescription('**طلب جديد!:**\n>>> '+args)
    .setTimestamp()).then(()=>{
  message.guild.channels.get(cha).send(line)})
}} 
  
  if(message.channel.id == '800122343120175105'){//ايدي الروم حق طلبات الاغراض .. حساب ماين الخ
  if(!message.content.split(" ")[1]) return message.delete(6000).then(()=> {message.channel.send('برجاء كتابة طلبك').then(a=>{a.delete(6000)}) })

if(message.content.toLowerCase().startsWith(prefix + 'طلب')){
message.channel.send('**تم ارسال طلبك بنجاح**').then(a=> a.delete(60000))
  message.delete(250)
message.guild.channels.get(cha2).send(`<@&${seller}>\n**الطلب من قبل : ${message.author}**`,new Discord.RichEmbed()
    .setColor('#0099ff')
    .setAuthor('ID: '+message.author.id, message.author.avatarURL)
    .setDescription('**طلب جديد!:**\n>>> '+args)
    .setTimestamp()).then(()=>{
  message.guild.channels.get(cha2).send(line)})
}} 
  
});


client.on("message" , abdulrahman => {
if (abdulrahman.channel.id == "8001224005530419812")
abdulrahman.channel.send(".")
});
