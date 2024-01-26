const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
    const customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Something went wrong, please try later',
    }

    console.log(err)

    res.status(customError.statusCode).json({
        msg: customError.message,
    })
}

module.exports = errorHandler
