const Model = require('./model')
const SmallRichEmbed = require('../plugin/embed.js')
const config = require('../data/core/config.json')
let LeagueAPI = require('leagueapiwrapper')
LeagueAPI = new LeagueAPI(config.api_key, Region.KR)

module.exports = class Rotation extends Model {
  constructor () {
    super({
      cmds: ['로테이션'],
      description: '금주의 로테이션 챔피언을 표시합니다.',
      category: '정보',
      commandname: '로테이션',
      isownercmd: false
    })
  }

  run (pkg) {
    LeagueAPI.getFreeChampionRotation().then(function(ChampRotation) {
      console.dir(ChampRotation)
    })
  }
}