const jwt = require('jsonwebtoken')

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
  return token
}

const isTokenValid = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

const attachTokenToHeaders = ({ res, customer, refreshToken }) => {
  const accessTokenJWT = createJWT({ payload: { customer } })
  const refreshTokenJWT = createJWT({ payload: { customer, refreshToken } })

  res.setHeader('Authorization', `Bearer ${accessTokenJWT}`)
  res.setHeader('Refresh-Token', `${refreshTokenJWT}`)
}

module.exports = {
  createJWT,
  isTokenValid,
  attachTokenToHeaders,
}
