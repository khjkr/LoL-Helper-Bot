const owners = require('../data/core/config.json').owners
module.exports = (id) => owners.includes(id)