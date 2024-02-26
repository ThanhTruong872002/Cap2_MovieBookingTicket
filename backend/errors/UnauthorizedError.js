const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./CustomAPIError')

class UnauthorizedError extends CustomAPIError {
  constructor(message, data = {}) {
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
    this.data = data
  }
}

module.exports = UnauthorizedError
