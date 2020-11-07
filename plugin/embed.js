const config = require('../data/core/config.json')

module.exports = class SmallRichEmbed {
  constructor () {
    this.result = {
      embed: {
        color: config.bot.color,
        fields: [],
        timestamp: '',
        footer: {
          text: '',
          icon_url: ``
        },
        description: '',
        author: {
          name: '',
          icon_url: '',
          url: ''
        },
        image: {
          url: ''
        },
        url: '',
        title: '',
        thumbnail: {
          url: ''
        }
      }
    }
  }

  addField (title, value, inline) {
    this.result.embed.fields.push({
      name: title || null,
      value: value || null,
      inline: inline || false
    })
  }

  setAuthor (name, iconURL, url) {
    this.result.embed.author.name = name || null
    this.result.embed.author.icon_url = iconURL || null
    this.result.embed.author.url = url || null
  }

  setColor (color) {
    this.result.embed.color = color || this.result.embed.color
  }

  setDescription (text) {
    this.result.embed.description = text || null
  }

  setImage (url) {
    this.result.embed.image.url = url || null
  }

  setThumbnail (url) {
    this.result.embed.thumbnail.url = url || null
  }

  setTitle (text) {
    this.result.embed.title = text || null
  }

  setUrl (text, url) {
    this.result.embed.title = text || null
    this.result.embed.url = url || null
  }

  setFooter (text, image) {
    this.result.embed.footer.text = text
    this.result.embed.footer.icon_url = image || null
  }

  init () {
    this.result = {
      embed: {
        color: config.bot.color,
        fields: [],
        timestamp: '',
        footer: {
          text: '',
          icon_url: ``
        },
        description: '',
        author: {
          name: '',
          icon_url: '',
          url: ''
        },
        image: {
          url: ''
        },
        url: '',
        title: '',
        thumbnail: {
          url: ''
        }
      }
    }
  }

  get () {
    return this.result
  }
}