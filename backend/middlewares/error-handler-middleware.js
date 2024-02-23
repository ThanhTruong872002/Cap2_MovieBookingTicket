const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Thao tác bị lỗi, vui lòng thử lại sau',
  }

  // console.log(err)

  if (err.name === 'ValidationError') {
    customError.message = Object.values(err.errors)[0].message
    customError.statusCode = 400
  }
  if (err.code && err.code === 11000) {
    customError.message = `${Object.keys(err.keyValue)} đã tồn tại trên hệ thống, vui lòng kiểm tra lại`
    customError.statusCode = 400
  }
  if (err.name === 'CastError') {
    customError.message = `Không tồn tại id : ${err.value}`
    customError.statusCode = 404
  }

  res.status(customError.statusCode).json({
    msg: customError.message,
  })
}

module.exports = errorHandler
