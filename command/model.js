const Logger = require('korean-logger')

module.exports = class CommandModel {
    constructor (info) {
      if (!info) return
      this.cmds = info.cmds
      this.description = info.description
      this.category = info.category
      this.commandname = info.commandname
      this.isownercmd = info.isownercmd
      Logger.success(`Successfully Loaded ${this.commandname}.\nCommand Structure:
  ┗─Commands: ${this.cmds}
  ┗─Description: ${this.description}
  ┗─Category: ${this.category}\n`)
    }
  
    run () {
      throw new Error('Error! There was nothing in run() method!')
    }
  }