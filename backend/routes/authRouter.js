const express = require('express')
const router = express.Router()
const { authenticationMidd } = require('../middlewares')

const { registerLocal, loginLocal, logout } = require('../controllers/authController')

router.route('/register').post(registerLocal)
router.route('/login').post(loginLocal)
router.route('/logout').delete(authenticationMidd, logout)

module.exports = router
