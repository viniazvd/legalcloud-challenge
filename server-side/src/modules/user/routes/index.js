const router = require('express').Router()
const controller = require('./../controllers')

router.get('/getusers', controller.getUsers)

module.exports = router
