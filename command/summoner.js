const Model = require('./model')
const SmallRichEmbed = require('../plugin/embed.js')
const config = require('../data/core/config.json')
let LeagueAPI = require('leagueapiwrapper')
LeagueAPI = new LeagueAPI(config.api_key, Region.KR)

module.exports = class Summoner extends Model {
  constructor () {
    super({
      cmds: ['소환사'],
      description: '소환사의 정보를 검색합니다.',
      category: '정보',
      commandname: '소환사',
      isownercmd: false
    })
  }

  run (pkg) {
    const Embed = new SmallRichEmbed()
    Embed.init()

    LeagueAPI.getSummonerByName(pkg.args.join(" ")).then(function(accountObject) {
      LeagueAPI.getLeagueRanking(accountObject).then(function(accountRank) {
        console.dir(accountObject)
        Embed.setTitle(accountObject.name)
        Embed.setThumbnail(`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/profileicon/${accountObject.profileIconId}.png`)
        Embed.addField('레벨', accountObject.summonerLevel, true)
        if(!accountRank[0] & !accountRank[1]) {
          Embed.addField('개인/2인 랭크', 'Unranked', true)
          Embed.addField('5:5 자유 랭크', 'Unranked', true)
        } else if(!accountRank[1] & accountRank[0].queueType == 'RANKED_FLEX_SR') {
          Embed.addField('개인/2인 랭크', 'Unranked', true)
          Embed.addField('5:5 자유 랭크', `${accountRank[0].tier} ${accountRank[0].rank}`, true)
        } else if(!accountRank[1]) {
          Embed.addField('개인/2인 랭크', `${accountRank[0].tier} ${accountRank[0].rank}`, true)
          Embed.addField('5:5 자유 랭크', 'Unranked', true)
        } else {
          Embed.addField('개인/2인 랭크', `${accountRank[0].tier} ${accountRank[0].rank}`, true)
          Embed.addField('5:5 자유 랭크', `${accountRank[1].tier} ${accountRank[1].rank}`, true)
        }
        pkg.msg.channel.send(Embed.get())
      }) 
    })
  }
}