module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Hey, bunu zaten yeni yaptın, ${addMoney.time.hours} saat, ${addMoney.time.minutes} dakika ve ${addMoney.time.seconds} saniye sonra yeniden alabilirsin.`);
    else return message.reply(`Günlük ödülün olan **${addMoney.amount}** 💸'yi topladın, artık **${addMoney.after}** 💸'an var'.`);
};

module.exports.help = {
    name: "günlük",
    aliases: ["günlük","gunluk","daily"],
    usage: "günlük"
}