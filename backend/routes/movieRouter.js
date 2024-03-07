const express = require('express')
const router = express.Router()

const { getAll, getMovieShowing, getUpcomingMovie, getPreSaleTicket, getDetailMovie } = require('../controllers/movieController')

router.route('/allmovie').get(getAll)
router.route('/showing').get(getMovieShowing)
router.route('/upcoming').get(getUpcomingMovie)
router.route('/presaleticket').get(getPreSaleTicket)
router.route('/detail').get(getDetailMovie)

module.exports = router