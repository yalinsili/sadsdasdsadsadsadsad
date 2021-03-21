  const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Olum, bu kadar fakir olunmaz");
  let item = args[0];
  if (!item) return message.channel.send("Ne almak istiyorsun");
  let hasItem = client.shop[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.reply("Böyle bir eşya yok");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Bu eşyayı almak için yeterince paran yok, "+hasItem.cost+" para gerekiyor.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`Tebrikler! **${item}** eşyasını satın aldın, ** ${hasItem.cost}** tl tuttu.`);
};

exports.help = {
  name: "al",
  aliases: ["al"],
  usage: `al`
};