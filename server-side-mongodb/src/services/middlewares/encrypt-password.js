// problema na injeção da dependencia 

const bcrypt = require('bcryptjs')

const encrypt = password => {
  console.log('OPA', password)
  // return async next => {
  return async function (next) {
    try {
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(password, salt)
      password = passwordHash
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = encrypt