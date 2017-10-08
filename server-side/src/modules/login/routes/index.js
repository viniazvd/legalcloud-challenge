const router = require('express').Router()
const controller = require('./../controllers')

router.post('/authenticate', controller.authenticate)
router.get('/logout', controller.logout)

module.exports = router
