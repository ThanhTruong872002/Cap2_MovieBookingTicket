const authRouter = require('./authRouter')
const movieRouter = require('./movieRouter')

module.exports = (app) => {
  app.use('/api/v1/auth', authRouter)
  app.use('./api/v1/movie', movieRouter)
}
