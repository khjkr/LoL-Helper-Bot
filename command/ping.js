const Model = require('./model')
const SmallRichEmbed = require('../plugin/embed.js')

module.exports = class Ping extends Model {
  constructor () {
    super({
      cmds: ['핑'],
      description: '봇의 핑을 표시합니다.',
      category: '일반',
      commandname: '핑',
      isownercmd: false
    })
  }

  run (pkg) {
    const Embed = new SmallRichEmbed()
    Embed.setTitle(`📡 WebSocket: ${Math.round(pkg.client.ws.ping)}ms`)
    pkg.msg.channel.send(Embed.get())
  }
}