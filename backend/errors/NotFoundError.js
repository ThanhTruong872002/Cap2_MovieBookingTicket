const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./CustomAPIError')

class NotFoundError extends CustomAPIError {
  constructor(message, data = {}) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
    this.data = data
  }
}

module.exports = NotFoundError
