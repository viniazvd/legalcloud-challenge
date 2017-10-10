const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// const encrypt = require('../../../services/middlewares/encrypt-password')
// const comparePassword = require('../../../services/middlewares/compare-password')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
})

// userSchema.pre('save', encrypt(this.password)
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(this.password, salt)
    this.password = passwordHash
    next()
  } catch (error) {
    next(error)
  }
})

// userSchema.methods.isValidPassword = comparePassword(newPassword, this.password)
userSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password)
  } catch (error) {
    throw new Error(error)
  }
}

const User = mongoose.model('user', userSchema)

module.exports = User
