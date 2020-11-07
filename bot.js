const { Client } = require('discord.js')
const Logger = require('korean-logger')
const fs = require('fs')
const config = require('./data/core/config.json')

class LoLHelper extends Client {
  constructor(config) {
    super()
    this.config = config
    this.commands = new Map()

    this.on('ready', () => {
      this.user.setActivity(`LoLHelper | ${config.bot.version} (${config.bot.build})`)
      Logger.success('The bot has been run successfully.')
    })

    fs.readdir('./event/', (err, files) => {
      if (err) return Logger.error(err)

      files.forEach((file) => {
        const event = require(`./event/${file}`)
        const eventName = file.split('.')[0]

        client.on(eventName, (a, b, c) => event.bind(this, a, b, c))
      })
    })

    fs.readdir('./command/', (err, files) => {
      if (err) return Logger.error(err)

      files.forEach((file) => {
        try {
          if (!file.endsWith('.js') || file.startsWith('model')) return
          const Prop = require(`./command/${file}`)
          const temp = new Prop()

          temp.cmds.forEach((alia) => {
            this.commands.set(alia, temp)
          })
        } catch (error) {
          Logger.log(`Failed to loading commands: ${error}`)
        }
      })
    })

    this.login(this.config.bot.token)
  }
}

const client = new LoLHelper(config)