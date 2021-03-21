const discord = require("discord.js");
exports.execute = async (client, message, args) => {


const narcoscode = new discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("**  » Narcos Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**`)

.addField('**• Ekonomi Komutları**')
.addField('> !al ','bir eşya alırsınız ')
.addField('> !ara ','yerde birşeyler ararsın ')
.addField('> !çalış ','işte çalışarak para kazanırsın ')
.addField('> !günlük ','günlük paranı alırsın ')
.addField('> !market',' alabileceğin ürünlere bakarsın')
.addField('> !para-duzenle','insanların parasını duzenlersin ')
.addField('> !banka','parana bakarsın ')
.addField('> !sıralama','en çok parası olanları görürsün ')


message.channel.send(narcoscode)




}
exports.help = {
  name: "yardım",
  aliases: ["yardım"],
  usage: `yardım`
};