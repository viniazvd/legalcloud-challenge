const db = require('../../../services/database/db')
const repositorys = require('../repositorys')

let services = {}

services.getUsers = () => {
  const query = repositorys.getUsers()

  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err || !results.length) {
        reject(new Error('Erro buscar usuarios.', err))
        return false
      }

      return resolve({ user: { results } })
    })
  })
}

module.exports = services
