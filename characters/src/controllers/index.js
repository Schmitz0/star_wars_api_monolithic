const {catchedAsync} = require("../utils")
const axios = require("axios")

module.exports={
    getCharacters:catchedAsync(require('./getCharacters')),
    createCharacter:catchedAsync(require('./createCharacter'))
}