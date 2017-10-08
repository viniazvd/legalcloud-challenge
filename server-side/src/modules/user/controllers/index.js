const service = require('../services')

let controller = {}

// get users
controller.getUsers = (req, res) => {
  service.getUsers()
    .then(results => res.status(200).send(results))
    .catch(error => res.status(404).send(error))
}

// add new user
controller.addNewUser = (req, res) => {
  const { email, senha } = req.body

  service.addNewUser(email, senha)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error))
}

module.exports = controller
