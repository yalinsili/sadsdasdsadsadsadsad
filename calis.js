module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Şu anda çalışmak için fazla yorgunsun ${work.time.minutes} dakika ve ${work.time.seconds} saniye sonra geri gel.`);
    else return message.reply(`Yaşasın! Çalışarak, **${work.amount}** 💸 kazandın. Şuanki paran: **${work.after}** 💸.`);
};

module.exports.help = {
    name: "çalış",
    aliases: ["calis","çalış","iş"],
    usage: "calis"
}
