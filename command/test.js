const Model = require('./model')
const SmallRichEmbed = require('../plugin/embed.js')
const config = require('../data/core/config.json')
let LeagueAPI = require('leagueapiwrapper')
LeagueAPI = new LeagueAPI(config.api_key, Region.KR)

module.exports = class Test extends Model {
  constructor () {
    super({
      cmds: ['test'],
      description: '테스트 기능입니다.',
      category: '개발',
      commandname: 'test',
      isownercmd: true
    })
  }

  run (pkg) {
    LeagueAPI.getSummonerByName(pkg.args[0]).then(function(accountInfo) {
      console.log(accountInfo)
      pkg.msg.channel.send('닉네임: ' + accountInfo.name + '\n레벨: ' + accountInfo.summonerLevel)
    })
    .catch(console.log)
  }
}