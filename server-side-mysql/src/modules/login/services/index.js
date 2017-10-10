const db = require('../../../services/database/db')
const errorHandler = require('../../../services/handlers/error')
const repositorys = require('../repositorys')
const sha1 = require('sha1')
const jwt = require('jsonwebtoken')

let services = {}

services.authenticate = (email, password) => {
  const query = repositorys.authenticate(email, sha1(password))

  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err || !result.length) {
        if (err === null) err = 'Erro ao autenticar um usuario.'
        errorHandler(err, 'Erro ao autenticar um usuario.', reject)
        return false
      }

      const { id, email } = result[0]
      const token = jwt.sign({ id, email }, process.env.JWT_SECRET_TOKEN)

      return resolve({ token, email })
    })
  })
}

module.exports = services
