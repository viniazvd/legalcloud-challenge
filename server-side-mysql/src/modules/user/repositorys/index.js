let repositorys = {}

repositorys.getUsers = () => {
  return `SELECT id, email FROM users`
}

repositorys.addNewUser = (email, password) => {
  return `INSERT INTO users VALUES ('', '${email}', '${password}')`
}

module.exports = repositorys
