const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send("❌ | Kimsede para yok?");
    const embed = new MessageEmbed()
        .setAuthor(`${message.guild.name} sunucusu para sıralaması!`, message.guild.iconURL)
        .setColor("RANDOM")
        .setThumbnail(client.users.cache.get(leaderboard[0].id) ? client.users.cache.get(leaderboard[0].id).displayAvatarURL : "")
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Unknown#0000"}`, `${u.money} 💸`);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "lb",
    aliases: ["siralama","sıralama"],
    usage: `lb`
}
