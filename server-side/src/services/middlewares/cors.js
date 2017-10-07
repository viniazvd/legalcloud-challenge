const corsMiddleware = require('cors')

const cors = corsMiddleware({
  'origin': '*',
  'allowedHeaders': '*',
  'exposedHeaders': '*',
  // 'credentials': true,
  'maxAge': 5
})

module.exports = cors
