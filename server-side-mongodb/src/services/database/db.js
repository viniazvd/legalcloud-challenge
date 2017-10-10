const mongoose = require('mongoose')

const dbURI = 'mongodb://localhost/dblegalcloud'

mongoose.Promise = global.Promise

mongoose.connect(dbURI, { useMongoClient: true })

mongoose.connection.on('connected', function () {
  console.log('Conectado na porta 3000')
})
mongoose.connection.on('error', function (err) {
  console.log('Erro na conexao ' + err)
})
mongoose.connection.on('disconnected', function () {
  console.log('Desconectado')
})
mongoose.connection.on('open', function () {
  console.log('Conexao foi aberta')
})

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Conexao encerrada')
    process.exit(0)
  })
})
