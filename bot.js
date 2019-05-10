const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$' ; 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//////////////////////////////////////////////////
client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply(' ★・wêlçømë to Server ★ ~THE_GAMING~ ★ :heart:  ');
  }
});


client.on('message', msg => {
  if (msg.content === '...') {
    msg.reply(' <@318705077734998017> BAN  ');
  }
});




  //////////////////////يثبت البوت داخل روم/////////////////////////////////////


client.on('ready', () => {
var x = client.channels.get("514532532516159498");
if (x) x.join();
});



/////////////////////////////////كود حالة البةت/////////////////////////////////



client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['By SHADOW',' By SHADOW '];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`https://www.twitch.tv/Allwai`);    
}, ms);    
    
});



//////////////////////////كود عرض البنق/////////////////////////////////////////
	  

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

	  

////////////////////////////////كود لون متغير//////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "MEMBER|GAMING", // اسم الرتبة
      guildid: "514532532516159498", // اي دي السيرفر
      sec: 5.5 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	

///////////////////////////////////تغيير لون ASH////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "Member", // اسم الرتبة
      guildid: "514532532516159498", // اي دي السيرفر
      sec: 5.5 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 1", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 2", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


/////////////////////////////////تغيير لون ASH//////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 3", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 4", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 5", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 6", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 7", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 8", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 9", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 0", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  





/////////////////////////////BOT MUSIC//////////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "BOT MUSIC", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.06 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  




/////////////////////////////BOT//////////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "BOT", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.05 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  




///////////////////////////////////كود الالوان//////////////////////////////////




 
  client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == `لون`){
    const embedd = new Discord.RichEmbed()
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
    .setColor(`ff0000`)
   
    if(!isNaN(args) && args.length > 0)
   
   
    if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
   
   
    var a = message.guild.roles.find("name",`${args}`)
     if(!a)return;
    const embed = new Discord.RichEmbed()
   
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
   
    .setColor(`${a.hexColor}`)
    message.channel.sendEmbed(embed);
    if (!args)return;
    setInterval(function(){})
       let count = 0;
       let ecount = 0;
    for(let x = 1; x < 201; x++){
   
    message.member.removeRole(message.guild.roles.find("name",`${x}`))
   
    }
     message.member.addRole(message.guild.roles.find("name",`${args}`));
   
   
    }
    });



  client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == `color`){
    const embedd = new Discord.RichEmbed()
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
    .setColor(`ff0000`)
   
    if(!isNaN(args) && args.length > 0)
   
   
    if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
   
   
    var a = message.guild.roles.find("name",`${args}`)
     if(!a)return;
    const embed = new Discord.RichEmbed()
   
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
   
    .setColor(`${a.hexColor}`)
    message.channel.sendEmbed(embed);
    if (!args)return;
    setInterval(function(){})
       let count = 0;
       let ecount = 0;
    for(let x = 1; x < 201; x++){
   
    message.member.removeRole(message.guild.roles.find("name",`${x}`))
   
    }
     message.member.addRole(message.guild.roles.find("name",`${args}`));
   
   
    }
    });


/////////////////////////////////////////////////////////////////////

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'log')
if (!channel) return;
channel.send({embed : embed});
});


const sql = require('sqlite');
const path = require('path');
sql.open(path.join(__dirname, 'credits.sql')) // read sql file
.then(() => { // then ?
	console.log('Opened') // if the sql opened
	sql.run(`CREATE TABLE IF NOT EXISTS creditSysteme (id VARCHAR(30), credits BIGINT, timeDaily BIGINT)`) // create new table if the table does'nt exosts
})
.catch(err => console.error(err)) // if the sql file does'nt exists

const ms = require('parse-ms'); // package time ? 
client.on("message", async msg => { // event message
	if(!msg.channel.guild) return; // channel guild
	let men = msg.mentions.users.first() || msg.author; // the mention or the author
	let prize =  msg.content.split(" ").slice(2).join(" ") // prize

	if(msg.content.startsWith(prefix+"credits")) { // if the message content credits do 
		if(!men || !men === undefined) return msg.channel.send("** :interrobang: | "+men.username+", I can't find "+men.username+"!**"); // undefind user
		if(!prize) {
		sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`).then(res => { // select user from table
			if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if the user does'nt exisit in table
			if(res) { // if user exsist
					msg.channel.send("**"+men.username+" :credit_card: balance is ``"+res.credits+"$``.**") // reply
			}
		})
		}else{ // else ?
			if(isNaN(prize)) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // is nan :)
			if(parseFloat(prize) === NaN) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // if nan :))
			if(men === msg.author) return; // if the men = author
			let authorRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
			let userRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`) // select from sql
			if(!authorRes) sql.run(`INSERT INTO creditSysteme VALUES ('${msg.author.id}', 0, 0)`) // if !user create new col 
			if(!userRes) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col 
			let authorCredits = authorRes.credits; // credits before transfer
			let userCredits = userRes.credits; // credits before transfer
			if(parseFloat(prize) > authorCredits) return msg.channel.send("** :thinking: | "+msg.author.username+", Your balance is not enough for that!**"); // if the balance hight then prize
			sql.run(`UPDATE creditSysteme SET credits = ${authorCredits - parseInt(prize)} WHERE id = '${msg.author.id}'`); // uptade credits for the author
			sql.run(`UPDATE creditSysteme SET credits = ${userCredits + parseInt(prize)} WHERE id = '${men.id}'`); // update credits for the mentions user
			msg.channel.send("**:moneybag: | "+msg.author.username+", has transferred ``$"+prize+"`` to "+men.toString()+"**") // the message :)
		}
	} else if(msg.content.startsWith(prefix+"daily")) {  // if the message content daily do
		let daily = 86400000; // 24h
		let amount = Math.floor((Math.random() * 500) + 1) // Money
    let res = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
		if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col 
    let time = res.timeDaily; // select last daily
    let credits = res.credits; // credits before daily
    if(time != null && daily - (Date.now() - time) > 0) { // if already climed the daily in same day

			let fr8 = ms(daily - (Date.now() - time)); // the remining time
			msg.channel.send("**:stopwatch: | "+msg.author.username+", your daily :yen: credits refreshes in "+fr8.hours+" hours and "+fr8.seconds+" seconds. **") //reply

		}else{ // if does'nt clim her daily in 24h
			msg.channel.send("**:atm:  |  "+msg.author.username+", you received your :yen: "+amount+" daily credits!**"); // reply
			sql.run(`UPDATE creditSysteme SET credits = ${credits + amount}, timeDaily = ${Date.now()} WHERE id = '${msg.author.id}'`); // add amount to the credits before daily
		}
	}
})
//58 line :) -







client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('هذا الأمر فقط للسيرفرات').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have ADMINISTRATOR Permission!' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(محتوى الرساله ${args})
.setDescription(برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست)
if (!args) return message.reply('يجب عليك كتابة كلمة او جملة لإرسال البرودكاست');message.channel.send(BcList).then(msg => {
msg.react(':pencil:')
.then(() => msg.react(':pencil2:'))
.then(() =>msg.react(':pencil:'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === ':pencil:' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === ':pencil2:' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(:ballot_box_with_check: تم ارسال الرساله بنجاح).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
  .setTitle('-Broadcast-')
.setAuthor(Server : ${message.guild.name})
.setFooter(Sender : ${message.author.username})
.setDescription(Message : ${args})
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(:ballot_box_with_check: تم ارسال الرساله بنجاح).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});




client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
