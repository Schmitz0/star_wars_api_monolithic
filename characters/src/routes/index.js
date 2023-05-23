const {Router} = require('express')
const controllers = require('../controllers')
const middlewares = require("../middlewares")
const axios = require("axios")

const router = Router()

router.get('/',controllers.getCharacters)

router.post('/',middlewares.characterValidation,controllers.createCharacter)

module.exports = router;