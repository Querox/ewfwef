const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, users, args) => {

    let yardım = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} - Komutlar`)
    .setDescription(`
    » \`p!erkek/kız <isim> <yas>\`: **Belirtilen Kullanıcıyı Kayıt Edersiniz**
    » \`p!stat\`: **Etiketlediğin & Kendi Kayıtların Hakkında Bilgi Verir**
    » \`p!topteyit\`: **Toplam Teyit Sıralamasını Gösterir**
    » \`p!kayıtsız\`: **Etiketlediğin Kullanıcıyı Kayıtsıza Atar**
    » \`p!isimler @Üye\`: **Kullanıcının İsimlerini Gösterir**`)
  .setThumbnail(message.author.avatarURL({dynamic: true}))
  .setFooter("Parleus ❤️ Querox")
  message.channel.send(yardım)
    
     
    
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'help'],
  permLevel: 0,
}

exports.help = {
      name: "yardım"
  
}
