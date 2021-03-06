const service = require('../services')

let controller = {}

// "auth" user
controller.authenticate = (req, res) => {
  const { email, password } = req.body

  service.authenticate(email, password)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error))
}

// logout
controller.logout = (req, res) => {
  // ...
  return res.status(200)
}

module.exports = controller
