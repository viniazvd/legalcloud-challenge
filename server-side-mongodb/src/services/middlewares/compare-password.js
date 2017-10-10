// problema na injeção da dependencia 

const bcrypt = require('bcryptjs')

module.exports = async function (newPassword, password) {
  try {
    return await bcrypt.compare(newPassword, password)
  } catch (error) {
    throw new Error(error)
  }
}
