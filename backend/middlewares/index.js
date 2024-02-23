const notFoundMidd = require('./not-found-middleware')
const errorHandlerMidd = require('./error-handler-middleware')
const authenticationMidd = require('./authentication-middleware')

module.exports = {
  notFoundMidd,
  errorHandlerMidd,
  authenticationMidd,
}
