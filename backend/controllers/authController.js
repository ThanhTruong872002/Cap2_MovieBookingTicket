const { StatusCodes } = require('http-status-codes')
const { User } = require('../models')
const CustomError = require('../errors')

const registerLocal = async (req, res) => {}

const verifyEmail = async (req, res) => {}

const loginLocal = async (req, res) => {}

const logout = async (req, res) => {}

const forgotPassword = async (req, res) => {}

const resetPassword = async (req, res) => {}

module.exports = {
    registerLocal,
    verifyEmail,
    loginLocal,
    logout,
    forgotPassword,
    resetPassword,
}
