require('dotenv').config()

const express = require('express')
const middlewares = express()

const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('./cors')
const helmet = require('helmet')
const isAuth = require('./is-auth')

middlewares.use(helmet())
middlewares.use(logger('dev'))
middlewares.use(bodyParser.json())
middlewares.use(bodyParser.urlencoded({ extended: true }))
middlewares.use(cookieParser())
middlewares.use(express.static(path.join(__dirname, 'public')))
middlewares.use(cors)

const exclusions = ['/api-mysql/getusers', '/api-mysql/addnewuser', '/api-mysql/authenticate', '/api-mysql/logout']
middlewares.use(isAuth({ exclusions }))

module.exports = middlewares
