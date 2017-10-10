let repositorys = {}

repositorys.authenticate = (email, password) => {
  return `SELECT id, email
          FROM users
          WHERE email = '${email}'
          AND password = '${password}'`
}

module.exports = repositorys
