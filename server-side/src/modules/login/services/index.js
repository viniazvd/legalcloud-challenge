const db = require('../../../services/database/db')
const repositorys = require('../repositorys')
const sha1 = require('sha1')
const jwt = require('jsonwebtoken')

let services = {}

services.addNewUser = (email, password) => {
  const query = repositorys.addNewUser(email, sha1(password))

  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err || !result.length) {
        reject(new Error('Erro ao adicionar um novo usuario.', err))
        return false
      }

      return resolve({ user: { email, id: result.insertId } })
    })
  })
}

services.authenticate = (email, password) => {
  const query = repositorys.authenticate(email, password)

  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err || !result.length) {
        reject(new Error('Erro ao autenticar um usuario.', err))
        return false
      }

      const { id, email } = result[0]
      const token = jwt.sign({ id, email }, process.env.JWT_SECRET_TOKEN)

      return resolve({ token })
    })
  })
}

module.exports = services
