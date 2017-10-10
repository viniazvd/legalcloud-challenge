const express = require('express')
const router = require('express-promise-router')()
const passport = require('passport')
const passportConf = require('../../../services/auth/passport')

const controller = require('../controllers/users')
const passportSignIn = passport.authenticate('local', { session: false })
const passportJWT = passport.authenticate('jwt', { session: false })

router.route('/getusers').get(controller.getUsers)
router.route('/addnewuser').post(controller.signUp)
router.route('/authenticate').post(passportSignIn, controller.authenticate)
router.route('/tokentest').get(passportJWT, controller.tokentest)

module.exports = router
