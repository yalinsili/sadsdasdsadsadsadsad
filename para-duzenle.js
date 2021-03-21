const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.ayar.admins.includes(message.author.id)) return; 
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Lütfen bir kullanıcı giriniz!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Lütfen bir sayı giriniz!");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Para değiştirildi!`)
        .addField(`Kişi`, `<@${data.user}>`)
        .addField(`Şuanki parası`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "para-duzenle",
    aliases: ["para-duzenle"],
    usage: `paraduzenle @kisi <sayi>`
}