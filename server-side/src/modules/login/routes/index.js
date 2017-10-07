const router = require('express').Router()
const controller = require('./../controllers')

router.post('/addnewuser', controller.addNewUser)
router.post('/authenticate', controller.authenticate)

module.exports = router
