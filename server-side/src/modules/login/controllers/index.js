const service = require('../services')

let controller = {}

// add new user
controller.addNewUser = (req, res) => {
  const { email, password } = req.body

  service.addNewUser(email, password)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error))
}

// "auth" user
controller.authenticate = (req, res) => {
  const { email, password } = req.body

  service.authenticate(email, password)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error))
}

module.exports = controller
