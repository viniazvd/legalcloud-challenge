let repositorys = {}

repositorys.addNewUser = (email, password) => {
  return `INSERT INTO users VALUES ('', '${email}', '${password}')`
}

repositorys.authenticate = (email, password) => {
  return `SELECT id, email
          FROM users
          WHERE email = '${email}'
          AND password = '${password}'`
}

module.exports = repositorys
