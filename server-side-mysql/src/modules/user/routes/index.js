const router = require('express').Router()
const controller = require('./../controllers')

router.get('/getusers', controller.getUsers)
router.post('/addnewuser', controller.addNewUser)

module.exports = router
