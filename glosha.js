const { Client, MessageEmbed } = require("discord.js");
const Proton = require("proton-io")
const client = new Client({ignoreDirect: true, ignoreRoles: true, ignoreEveryone: true});
client.setMaxListeners(50);
const request = require("request");

let komutKlasör = "./commands"
let eventLoad = "./events"
let ownerIDs = (sahip);
let owner = true;
let defaultCommands = true;
const komutYukle = 
new proton(client,komutKlasör,eventLoad,ownerIDs,{owner,defaultCommands})
let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;
let prefix = (prefix);
 
client.on('message', async (msg) => {
  komutYukle.message(
  msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,
  etiketlePrefixOgren}
  )
  })
                                                                                                   //CREATED BY GLOSHA

const safeid = ['kULLANICI İD' , 'kULLANICI İD' , 'kULLANICI İD' , 'kULLANICI İD'];
const guild = (sunucu); 

const gloshaban = 'LOG KANAL İD'// 
const gloshakick = 'LOG KANAL İD'// 
const glosharol = 'LOG KANAL İD'// 
const gloshakanal = 'LOG KANAL İD'//
const gloshaguild = 'LOG KANAL İD'// 
const gloshawebhook = 'LOG KANAL İD'// 
const gloshaurl = 'LOG KANAL İD'// 
const gloshabotkoruma = 'LOG KANAL İD' // 
const botroles = ["", "", "",]; // BOT ROLLERI
const arr = ["ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_NICKNAMES"];

client.token = "TOKEN";

client.on("ready", async () => {
safeid.push(client.user.id);
console.log(`[BOT] | Sunucu Üzerinde Değişiklik Yapabilen ID'ler: ${safeid}
[BOT] | Bot Başarıyla Aktif Edildi !
GLOSHA WAS HERE?`);
client.user.setStatus("idle");
});

client.on('ready', ()=>{
client.channels.get('794220560385179658').join()
})

                                                                                     //CREATED BY GLOSHA

client.on("guildBanAdd", async (guild, user) => {
const logs = await guild.fetchAuditLogs({ limit: 1, type: "MEMBER_BAN_ADD" });
const log = logs.entries.first();
if (!log) return;
const target = log.target;
const id = log.executor.id;
if (!safeid.includes(id)) {
let uye = guild.members.cache.get(id);
let kullanici = guild.members.cache.get(client.user.id);
if (kullanici.roles.highest.rawPosition <= uye.roles.highest.rawPosition) return;
guild.roles.cache.filter(r => {return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(x => {console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)});});
uye.ban({reason: "Sunucudan Üye Yasakladığı İçin Yasaklandı.", days: 7});
guild.members.unban(target.id);
let yazı = 'Guard | Ban Koruması'
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`), **${target.tag}** (\`${target.id}\`) kullanıcısını yasakladı. \n\n ${uye} üyesini sunucudan \`yasakladım\` **${target.tag}** üyesinin banını kaldırdım. `)
.setColor('#c43636')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(gloshaban).send(gloshaembed)
} else { };});

                                                                                     //CREATED BY GLOSHA




                                                                                     //CREATED BY GLOSHA

client.on("guildMemberRemove", async (uye) => {
let guild = uye.guild;
const logs = await guild.fetchAuditLogs({ limit: 1, type: "MEMBER_KICK" });
const log = logs.entries.first();
if (!log) return;
const target = log.target;
const id = log.executor.id;
if (!safeid.includes(id)) {
if (uye.id === target.id) {
let user = guild.members.cache.get(id);
let kullanici = guild.members.cache.get(client.user.id);
if (kullanici.roles.highest.rawPosition <= uye.roles.highest.rawPosition) return;
guild.roles.cache.filter(r => {return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(x => {console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)})});
user.ban({reason: "Sunucudan Üye Attığı İçin Yasaklandı.", days: 7});
let yazı = 'Guard | Kick Koruması'
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${user} (\`${user.id}\`), **${target.tag}** (\`${target.id}\`) kullanıcısını attı. \n\n ${user} üyesini sunucudan \`yasakladım.\``)
.setColor('#c43636')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(gloshakick).send(gloshaembed)
} else { };
} else { };});

                                                                                     //CREATED BY GLOSHA






                                                                                     //CREATED BY GLOSHA
client.on("webhookUpdate", async (channel) => {
let guild = channel.guild;
guild.fetchAuditLogs().then(async (logs) => {
if (logs.entries.first().action === `WEBHOOK_CREATE`) {
let yetkili = logs.entries.first().executor;
let id = logs.entries.first().executor.id;
if (!safeid.includes(id)) {
let uye = guild.members.cache.get(id);
let kullanic = guild.members.cache.get(client.user.id);
if (kullanic.roles.highest.rawPosition < uye.roles.highest.rawPosition) return;
guild.roles.cache.filter(r => {return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanic.roles.highest.rawPosition)}).map(x => {console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)});});
uye.ban({reason: "Webhookları Değiştirmekten(açmak-silmek-düzenlemek) yasaklandı.", days: 7});
let yazı = 'Guard | Webhook Koruması'
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) Webhook Oluşturdu.\n\n ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#c43636')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(gloshawebhook).send(gloshaembed)
} else { };
} else { };})});
                                                                                     //CREATED BY GLOSHA







                                                                                     //CREATED BY GLOSHA

client.on("channelCreate", async (channel) => {
const guild = channel.guild;
guild.fetchAuditLogs().then(async (logs) => {
if(logs.entries.first().action === `CHANNEL_CREATE`) {
const id = logs.entries.first().executor.id;
if(!safeid.includes(id)) {
const uye = guild.members.cache.get(id);
const kullanici = guild.members.cache.get(client.user.id);
if(kullanici.roles.highest.rawPosition < uye.roles.highest.rawPosition) return;
guild.roles.cache.filter(r => {return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(x => {
console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)});});
uye.ban({reason: "Kanal Oluşturmaktan Yasaklandı.", days: 7});
let yazı = 'Guard | Kanal Koruması'
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) Kanal oluşturdu.\n\n ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#c43636')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(gloshakanal).send(gloshaembed)
} else { };} else { };});});

                                                                                     //CREATED BY GLOSHA






                                                                                     //CREATED BY GLOSHA

client.on("channelDelete", async (channel) => {
const guild = channel.guild;
guild.fetchAuditLogs().then(async (logs) => {
if (logs.entries.first().action === `CHANNEL_DELETE`) {
const id = logs.entries.first().executor.id;
if (!safeid.includes(id)) {
const uye = guild.members.cache.get(id);
const kullanici = guild.members.cache.get(client.user.id);
if(kullanici.roles.highest.rawPosition < uye.roles.highest.rawPosition)
guild.roles.cache.filter(r => {return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(x => {console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)})});
uye.ban({reason: "Kanal Silmekten Yasaklandı.", days: 7});
let yazı = 'Guard | Kanal Koruması'
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) ${channel.name} Kanalını Sildi.\n\n ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#c43636')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(gloshakanal).send(gloshaembed)
} else { };
} else { };
})});

                                                                                     //CREATED BY GLOSHA




                                                                                    //CREATED BY GLOSHA
client.on("roleDelete", async (role) => {
const guild = role.guild;
let sil = guild.roles.cache.get(role.id);
guild.fetchAuditLogs().then(async (logs) => {
if(logs.entries.first().action === `ROLE_DELETE`) {
const id = logs.entries.first().executor.id;
if(!safeid.includes(id)) {
const uye = guild.members.cache.get(id);
const kullanici = guild.members.cache.get(client.user.id);
if(kullanici.roles.highest.rawPosition < uye.roles.highest.rawPosition)
guild.roles.cache.filter(r => {return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(x => {console.log(x.name); x.edit({permissions: x.permissions.remove(arr)});});
uye.ban({reason: "Rol Silmekten Yasaklandı.", days: 7});
let yazı = 'Guard | Rol Koruması'  
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) ${role.name} Rolünü Sildi.\n\n ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#acaa37')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(glosharol).send(gloshaembed)
} else { };
} else { };});});
                                                                                    //CREATED BY GLOSHA





                                                                                    //CREATED BY GLOSHA
client.on("roleUpdate", async (oldRole, newRole) => { 
let guild = newRole.guild;
guild.fetchAuditLogs().then(async (logs) => {
if(logs.entries.first().action === `ROLE_UPDATE`) {
let id = logs.entries.first().executor.id;
if(!safeid.includes(id)) {
if(!arr.some(a => oldRole.permissions.has(a)) && arr.some(a => newRole.permissions.has(a))) {
const uye = guild.members.cache.get(id);
const kullanici = guild.members.cache.get(client.user.id);
if(kullanici.roles.highest.rawPosition < uye.roles.highest.rawPosition) return;
guild.roles.cache.filter(r => { return ( arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(x => {
console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)});
});
uye.ban({reason: "Rol Güncellemekten Yasaklandı.", days: 7});
let yazı = 'Guard | Rol Koruması'  
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) ${newRole.name} Rolüne Yetki Verdi.\n\n ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#378fac')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(glosharol).send(gloshaembed)
} else { };
} else { };
} else { };
});
});
                                                                                    //CREATED BY GLOSHA



                                                                                                                                                  

                                                                                    //CREATED BY GLOSHA
client.on("roleCreate", async (role) => {
let guild = role.guild;
guild.fetchAuditLogs().then(async (logs) => {
if(logs.entries.first().action === `ROLE_CREATE`) {
let id = logs.entries.first().executor.id;
if(!safeid.includes(id)) {
let uye = guild.members.cache.get(id);
let kullanici = guild.members.cache.get(client.user.id);
if(kullanici.roles.highest.rawPosition < uye.roles.highest.rawPosition) return;
guild.roles.cache.filter(r => {return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(q => {
console.log(q.name);
q.edit({permissions: q.permissions.remove(arr)});});
uye.ban({reason: "Rol Oluşturmaktan Yasaklandı"});
role.delete();
let yazı = 'Guard | Rol Koruması'  
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) Rol Oluşturuldu.\n\n ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#37ac6c')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(glosharol).send(gloshaembed)
} else { };
} else { };});});
                                                                                    //CREATED BY GLOSHA






                                                                                   //CREATED BY GLOSHA
client.on("guildMemberAdd", async (member) => {
const guild = member.guild;
guild.fetchAuditLogs().then(async (logs) => {
if(logs.entries.first().action === `BOT_ADD`) {
const id = logs.entries.first().executor.id;
if(!safeid.includes(id)) {
if(member.user.bot){
const uye = guild.members.cache.get(id);
const kullanici = guild.members.cache.get(client.user.id);
if(kullanici.roles.highest.rawPosition < uye.roles.highest.rawPosition) return;
guild.roles.cache.filter(r => { return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(x => { console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)});});
uye.ban({ reason: "Sunucuya Bot Getirdiği İçin Yasaklandı.", days: 7 });
member.ban({ reason: "Sunucuya Bot İzinsiz Çekildi.", days: 7 })
let yazı = 'Guard | Bot Koruması'  
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, guild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) Sunucuya ${member} Botunu Ekledi.\n\n ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#5ba4cc')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(gloshabotkoruma).send(gloshaembed)
} else { };
} else { };
} else { };});});
                                                                                   //CREATED BY GLOSHA




                                                                                     //CREATED BY GLOSHA

client.on("guildUpdate", async (oldGuild, newGuild) => {
newGuild.fetchAuditLogs().then(async (logs) => {
if(logs.entries.first().action === `GUILD_UPDATE`) {
var yapan = logs.entries.first().executor;
let id = yapan.id;
const uye = newGuild.members.cache.get(id);
const kullanici = newGuild.members.cache.get(client.user.id);
if(oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
if(!safeid.includes(id)) {
request({
method: "PATCH",
url: `https://discord.com/api/guilds/${newGuild.id}/vanity-url`,
headers: {
Authorization: `Bot ${client.token}`},
json: {code: `${oldGuild.vanityURLCode}`}});
newGuild.roles.cache.filter(r => { return(arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition);}).map(x => {console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)});});
uye.ban({reason: "Url'yi Değiştirdiği İçin Yasaklandı.", days: 7});
let yazı = 'Guard | Url Koruması'  
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, newGuild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) Sunucunun Urlsini Değiştirdi.\n\n Sunucunun Urlsini \`${newGuild.vanityURLCode}\` Olarak Değiştirdi, ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#c43636')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(gloshaurl).send(gloshaembed)
} else { };
} else if (oldGuild.name !== newGuild.name) {
if(!safeid.includes(id)) {
newGuild.setName(oldGuild.name);
uye.ban({reason: "Sunucunun İsmini Değiştirdiği İçin Yasaklandı", days: 7});
newGuild.roles.cache.filter(r => { return (arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kullanici.roles.highest.rawPosition)}).map(x => { console.log(x.name);
x.edit({permissions: x.permissions.remove(arr)});
let yazı = 'Guard | Sunucu Koruması'  
const gloshaembed = new MessageEmbed()
.setAuthor(yazı, newGuild.iconURL({dynamic:true}))
.setDescription(`${uye} (\`${uye.id}\`) Sunucu Ayarlarını Güncelledi.\n\n ${uye} üyesini sunucudan \`yasakladım.\``)
.setColor('#c43636')
.setFooter(`Glosha #CODE`)
client.channels.cache.get(gloshaguild).send(gloshaembed)});
} else { };
} else { };
} else { };});});

process.on("uncaughtExpection", function (err) {
  if (err) console.log(err);
});

                                                                                     

client.login(token);




















































































































































































































































































































































