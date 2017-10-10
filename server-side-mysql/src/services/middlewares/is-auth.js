const jwt = require('jsonwebtoken')

const isAuth = (arrayExclusions) => {
  return async (req, res, next) => {
    if (!arrayExclusions.exclusions.includes(req.url)) {
      const token = req.headers['x-access-token']
      if (!token) {
        res.status(403).send({ error: 'Nao possui token' })
        return false
      }

      try {
        req.decode = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
      } catch (error) {
        res.status(403).send({ error: 'Token invalido' })
        return false
      }
    }

    next()
  }
}

module.exports = isAuth
