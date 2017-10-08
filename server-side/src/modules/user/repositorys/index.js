let repositorys = {}

repositorys.getUsers = () => {
  return `SELECT id, email FROM users`
}

repositorys.addNewUser = (email, senha) => {
  return `INSERT INTO users VALUES ('', '${email}', '${senha}')`
}

module.exports = repositorys
