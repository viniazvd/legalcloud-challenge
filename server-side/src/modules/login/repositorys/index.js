let repositorys = {}

repositorys.authenticate = (email, senha) => {
  return `SELECT id, email
          FROM users
          WHERE email = '${email}'
          AND senha = '${senha}'`
}

module.exports = repositorys
