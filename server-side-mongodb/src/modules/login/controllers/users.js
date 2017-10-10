const User = require('../models/user')
const signToken = require('../../../services/auth/sign-token')

module.exports = {
  signUp: async (req, res, next) => {
    const { email, password } = req.body

    const foundUser = await User.findOne({ email })
    if (foundUser) {
      return res.status(403).send({ error: 'E-mail já existe! Tente outro.' })
    }

    const newUser = new User({ email, password })
    await newUser.save()

    const token = signToken(newUser)

    res.status(200).send({ token })
  },

  authenticate: async (req, res, next) => {
    const email = req.user.email
    const token = signToken(req.user)

    res.status(200).send({ email, token })
  },

  tokentest: async (req, res, next) => {
    res.send({ teste: 'token ok' })
  },

  getUsers: async (req, res, next) => {
    const results = await User.find()

    res.status(200).send({ user: { results } })
  }
}
