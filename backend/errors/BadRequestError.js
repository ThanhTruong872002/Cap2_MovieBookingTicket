const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./CustomAPIError')

class BadRequestError extends CustomAPIError {
  constructor(message, data = {}) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
    this.data = data
  }
}

module.exports = BadRequestError
