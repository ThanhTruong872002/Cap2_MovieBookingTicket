const express = require('express')
const router = express.Router()

const { getMovieShowing, getUpcomingMovie, getPreSaleTicket, getDetailMovie } = require('../controllers/movieController')

router.route('/showing').get(getMovieShowing)
router.route('/upcoming').get(getUpcomingMovie)
router.route('/presaleticket').get(getPreSaleTicket)
router.route('/detail/:id').get(getDetailMovie)

module.exports = router