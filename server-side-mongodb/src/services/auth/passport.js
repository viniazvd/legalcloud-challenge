const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy
const User = require('../../modules/login/models/user')
const { JWT_SECRET } = require('../env/configs')

// const options = {}
// options.jwtFromRequest = ExtractJwt.fromHeader('x-access-token')
// options.setOrKey = process.env.JWT_SECRET_TOKENcre

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub)

    if (!user) {
      return done(null, false)
    }

    done(null, user)
  } catch (error) {
    done(error, false)
  }
}))

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email })

    if (!user) {
      return done(null, false)
    }

    const isMatch = await user.isValidPassword(password)

    if (!isMatch) {
      return done(null, false)
    }

    done(null, user)
  } catch (error) {
    done(error, false)
  }
}))
