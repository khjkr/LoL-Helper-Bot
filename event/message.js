const config = require('../data/core/config.json')
const SmallRichEmbed = require('../plugin/embed.js')
const checkOwner = require('../plugin/checkOwner')
const Logger = require('korean-logger')

module.exports.bind = (client, msg) => {
  delete require.cache[require.resolve('../data/core/check.json')]
  const check = require('../data/core/check.json')

  if (msg.author.bot) return
  if (!msg.content.startsWith(config.bot.prefix)) return

  if (check.check) {
    if (!checkOwner(msg.author.id)) {
      const Embed = new SmallRichEmbed()
        Embed.setTitle('⚠️ 점검 안내')
        Embed.setDescription(`점검 제목: ${check.title}\n점검 사유: ${check.reason}\n점검 기간: ${check.time}`)
        Embed.setFooter('점검중에는 서비스를 이용하실수 없습니다.')
      return msg.channel.send(Embed.get())
    }
  }

  const args = msg.content
    .slice(config.bot.prefix.length)
    .trim()
    .split(/ +/g)
  const command = args.shift().toLowerCase()

  const cmd = client.commands.get(command)
  if (!cmd) return
  Logger.log(`${msg.author.tag} | ${msg.content.slice(config.bot.prefix.length)}`)

  const compress = {
    client: client,
    msg: msg,
    args: args,
  }
  cmd.run(compress)
}