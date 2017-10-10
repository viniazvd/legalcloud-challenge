const db = require('../../../services/database/db')
const errorHandler = require('../../../services/handlers/error')
const repositorys = require('../repositorys')
const sha1 = require('sha1')
let services = {}

services.getUsers = () => {
  const query = repositorys.getUsers()

  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err || !results.length) {
        if (err === null) err = 'Erro buscar usuarios.'
        errorHandler(err, 'Erro buscar usuarios.', reject)
        return false
      }

      return resolve({ user: { results } })
    })
  })
}

services.addNewUser = (email, password) => {
  const query = repositorys.addNewUser(email, sha1(password))

  return new Promise((resolve, reject) => {
    if (email === undefined || password === undefined) {
      errorHandler('E-mail e/ou password vazio(s).', 'E-mail e/ou password vazio(s).', reject)
      return false
    }

    db.query(query, (err, result) => {
      if (err) {
        if (err === null) err = 'Erro ao adicionar um novo usuario.'
        errorHandler(err, 'Erro ao adicionar um novo usuario.', reject)
        return false
      }

      return resolve({ user: { email, id: result.insertId } })
    })
  })
}

module.exports = services
