const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./CustomAPIError')

class UnauthenticatedError extends CustomAPIError {
  constructor(message, data = {}) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
    this.data = data
  }
}

module.exports = UnauthenticatedError
