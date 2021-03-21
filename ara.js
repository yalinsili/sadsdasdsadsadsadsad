exports.execute = async (client, message, args) => {
    let users = [
        "Cüzdan",
        "Ekmek",
        "Air pod",
        "Kedi",
      "ocak",
      "Buz Dolabı",
      "çöp",
      "Demir Para",
      "Şişe",
      "kağıt"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 12000, customName: "search" });
    if (beg.onCooldown) return message.reply(`Bu kadarda beleşçi olunmaz, ${beg.time.minutes} dakika ve ${beg.time.seconds} saniye sonra geri gel.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Yakalandığın için para kazanamadın`);
    else return message.reply(`yerde bulduğun **${users[Math.floor(Math.random() * users.length)]}** Sana biraz para kazandırdı **${beg.amount}** 💸.`);
};

exports.help = {
    name: "ara",
    aliases: ['ara'],
    usage: "ara"
}