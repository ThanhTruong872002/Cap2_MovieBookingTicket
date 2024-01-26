const express = require('express')
const router = express.Router()

const {
    registerLocal,
    loginLocal,
    verifyEmail,
    logout,
    forgotPassword,
    resetPassword,
} = require('../controllers/authController')

router.route('/register-local').post(registerLocal)
router.route('/verify-email').post(verifyEmail)
router.route('/login-local').post(loginLocal)
router.route('/logout').post(logout)
router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password').post(resetPassword)

module.exports = router
