let repositorys = {}

repositorys.getUsers = () => {
  return `SELECT id, email FROM users`
}

module.exports = repositorys
