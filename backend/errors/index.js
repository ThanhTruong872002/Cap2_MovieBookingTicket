const CustomAPIError = require('./CustomAPIError')
const NotFoundError = require('./NotFoundError')
const BadRequestError = require('./BadRequestError')
const UnauthorizedError = require('./UnauthorizedError')
const UnauthenticatedError = require('./UnauthenticatedError')

module.exports = {
  CustomAPIError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  UnauthenticatedError
}
