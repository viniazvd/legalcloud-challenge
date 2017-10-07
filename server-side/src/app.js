const app = require('../src/services/middlewares')

const login = require('./modules/login/routes')
const user = require('./modules/user/routes')

app.use('/api/', login)
app.use('/api/', user)

module.exports = app
