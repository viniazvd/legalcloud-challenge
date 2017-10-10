const app = require('../src/services/middlewares')

const login = require('./modules/login/routes')
const user = require('./modules/user/routes')

app.use('/api-mysql/', login)
app.use('/api-mysql/', user)

module.exports = app
