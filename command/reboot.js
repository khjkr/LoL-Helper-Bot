const Model = require('./model')
const SmallRichEmbed = require('../plugin/embed.js')
const checkOwner = require('../plugin/checkOwner')
const Logger = require('korean-logger')

module.exports = class Reboot extends Model {
  constructor () {
    super({
      cmds: ['재시작'],
      description: '봇을 재시작 합니다.',
      category: '관리',
      commandname: '재시작',
      isownercmd: true
    })
  }

  run (pkg) {
    const Embed = new SmallRichEmbed()

    if (this.isownercmd && !checkOwner(pkg.msg.author.id)) {
      Embed.setTitle('⚠️ 경고')
      Embed.setColor(14217046)
      Embed.setDescription('이 명령어는 __**관리자**__ 전용 명령어 입니다.')
      return pkg.msg.channel.send(Embed.get())
    }

    Embed.setTitle('🔄 재시작')
    Embed.setDescription('봇을 재시작 합니다...')
    pkg.msg.channel.send(Embed.get()).then(() => {
      Logger.log('Starting restart sequince...')
      process.exit(1)
    })
  }
}