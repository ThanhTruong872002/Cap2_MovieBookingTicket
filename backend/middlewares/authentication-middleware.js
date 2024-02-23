const CustomError = require('../errors')
const { isTokenValid } = require('../utils')
const { Token } = require('../models')

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const accessToken = authHeader.split(' ')[1]
      const payload = isTokenValid(accessToken)
      req.customer = payload.customer
      return next()
    } catch (err) {}
  }
  try {
    const refreshToken = req.headers['refresh-token']
    const payload = isTokenValid(refreshToken)
    const existingToken = await Token.findOne({
      customer: payload.customer.id,
      refreshToken: payload.refreshToken,
      deleted: false,
    })
    if (!existingToken || !existingToken?.isValid) {
      throw new CustomError.UnauthenticatedError('Xác thực không thành công')
    }
    req.customer = payload.customer
    next()
  } catch (err) {
    throw new CustomError.UnauthenticatedError('Xác thực không thành công')
  }
}

module.exports = authenticateUser
