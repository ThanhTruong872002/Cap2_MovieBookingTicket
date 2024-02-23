const { StatusCodes } = require('http-status-codes')
const { Customer, Token } = require('../models')
const CustomError = require('../errors')
const { createTokenUser, createJWT } = require('../utils')
const crypto = require('crypto')
const { attachTokenToHeaders } = require('../utils/jwt')

const registerLocal = async (req, res) => {
  const { fullName, email, password } = req.body
  if (!fullName || !email || !password) {
    throw new CustomError.BadRequestError('Vui lòng cung cấp đầy đủ thông tin')
  }
  const isEmailExist = await Customer.findOne({
    email,
  })
  if (isEmailExist) {
    throw new CustomError.BadRequestError('Email đã tồn tại trên hệ thống')
  }
  await Customer.create({
    fullName,
    email,
    password,
  })
  res.status(StatusCodes.CREATED).json({
    message: 'Đăng ký tài khoản thành công',
    data: {},
  })
}

const loginLocal = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new CustomError.BadRequestError('Vui lòng cung cấp đầy đủ thông tin')
  }
  const customer = await Customer.findOne({
    email,
  })
  if (!customer) {
    throw new CustomError.UnauthenticatedError('Thông tin đăng nhập không hợp lệ')
  }
  const isPasswordTrue = await customer.comparePassword(password)
  if (!isPasswordTrue) {
    throw new CustomError.UnauthenticatedError('Thông tin đăng nhập không hợp lệ')
  }
  const tokenUser = createTokenUser(customer)
  let refreshToken = ''
  const existingToken = await Token.findOne({ customer: customer._id, deleted: false })
  if (existingToken) {
    const { isValid } = existingToken
    if (!isValid) {
      throw new CustomError.UnauthenticatedError('Thông tin đăng nhập không hợp lệ')
    }
    refreshToken = existingToken.refreshToken
  } else {
    refreshToken = crypto.randomBytes(40).toString('hex')
    const userAgent = req.headers['user-agent']
    const ip = req.ip
    await Token.create({ refreshToken, ip, userAgent, customer: customer._id })
  }
  const accessTokenJWT = createJWT({ payload: { customer } })
  const refreshTokenJWT = createJWT({ payload: { customer, refreshToken } })
  res.status(StatusCodes.OK).json({
    message: 'Đăng nhập thành công',
    data: {
      user: tokenUser,
      accessToken: accessTokenJWT,
      refreshToken: refreshTokenJWT,
    },
  })
}

const logout = async (req, res) => {
  await Token.findOneAndUpdate(
    {
      customer: req.customer.id,
      deleted: false,
    },
    {
      deleted: true,
    },
  )

  res.status(StatusCodes.OK).json({
    message: 'Đăng xuất tài khoản thành công',
    data: {},
  })
}

module.exports = {
  registerLocal,
  loginLocal,
  logout,
}
