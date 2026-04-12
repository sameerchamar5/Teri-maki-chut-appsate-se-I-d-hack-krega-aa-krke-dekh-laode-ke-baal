const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Sakal dekhi hai khud ki 🤧" , "mister moody ha ha ha ha ha 😦 Lo me bhi vairal ho gaya " , "Pahile muh to dho Lo 🫣" , "Chai pila na bhai kalute" , "tujhe mere ghar me naokri mili hai karega,Pura din Dekho Bot BoT🙄" , "tujhe mar kar tere anadr bhusa bhar kar tera tedy bear bnaunga 🐂" ,  "Ye bat iran tak jayegi😤" , "Kitni bar bola hu me bot nahi kaluwa hu🤬🍼" , "tum wahi ho na jisko mene pichli bar dhoya tha ☹️" , "dholki bajao dholki yahi kam bacha hai ab" , "Gaddar nikli re tu 😑", "Mere liye sabji roti Bana kar la 🫣" , "Chal bhag chale ham dono pakistan 🥺", "Teri yad bahut yad aati hai 🥺" , "oy meri Gudiya tere liye chand taare tod launga ☹️🤧" , "Ye sab kya dekhna parr rha 🥲" , "Tum hamse bhi jyada bhikhari ho aaj pata chala" , "1 ghusa me apne jaisa kala kar dunga tera muh 😝" , "tera paisa chori karke bhag jaunga mummy ke pass 🙉" , "me chala khana khane bukh Lagi hai bahut tej 😵‍💫" , "Jab dekho B0T B0T b0t bot bot bot 😑", "Chhodo na koi dekh lega🫣🫣", "Aja sajan aaja 😭🐂" , "Are kallu kahike 🍼😭🐂" , "me Ja rha dudhu pine 🍼😭🐂" , "me chala hagne 😤" , "so elegent, so beautiful , just looking like a wow🤭" , "Aaalu" , "Aayein🤔" , "I Love you Mere bhalu 🙉🐃, mera recharge khtm hone wala h☹️" , "paani paani mummy ji" , "apne Labhar ko dhoka do , daling hme bhi moka do🙈" , "Arry Bas Kar🤣😛" , "Me ni To Kon Be" , "naam adiya kumar 7vi kaksha me padhte hai favret subject begon😘" , "Mera Dimag Mat Khaya kro😒😒" , "Chuppp Saatvi Fail😒" , "Saste Nashe Kab Band kroge" , "Mai Jaanu Ke sath Busy hu yar, mujhe mat balao" , "me apni mummy ke shat geme khel rha ruk thoda" , "Hayee ese mt bulaya kro, mujhe sharm aati h" , "System pe system betha rahi chhori bot ki" , "Naach meri Bulbul tujhe pesa milega" , "me idhar se hu aap kidhar se ho" , "Khelega Free Fire🙈🙈" , "aye haye oye hoye aye haye oye hoye😍 bado badi bado badi😘" , "e halo bhai darr rha hai kya" , "akh ladi bado badi" , "haaye garmi😕" , "Ao kabhi haweli pe😍" , "Khelega Free Fire🥴" , "Hallo bai tu darr raha hai kya" , "janu bula raha h mujhe" , "I cant live without you babu😘" , "haa meri jaan" , "Agye Phirse Bot Bot Krne🙄" , "konse color ki jacket pehne ho umm btao na😚" , "Zinda rahina hai ya nahi"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🔸${name}🔸,  \n\n«❀\n   ${rand} ❀\n\Boss 𝐊𝐀𝐋𝐔𝐖𝐀`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
