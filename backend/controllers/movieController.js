const { DetailMovie } = require('../models')
const moment = require('moment')
const { StatusCodes } = require('http-status-codes')

const getAll = async (req, res) => {
    try {
        const allMovies = await DetailMovie.find();

        res.status(StatusCodes.OK).json({
            message: 'Tất cả',
            data: { allMovies },
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}

const getMovieShowing = async (req, res) => {
    try {
        const today = moment().startOf('day');
        const moviesNowPlaying = await DetailMovie.find({
            ticketOnSale: true,
            startDate: { $lte: today },
            endDate: { $gte: today },
        });

        res.status(StatusCodes.OK).json({
            message: 'Phim đang chiếu',
            data: { moviesNowPlaying },
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}

const getUpcomingMovie = async (req, res) => {
    try {
        const today = moment().startOf('day');
        const moviesUpcoming = await DetailMovie.find({
            ticketOnSale: false,
            startDate: { $gte: today },
        });

        res.status(StatusCodes.OK).json({
            message: 'Phim sắp chiếu',
            data: { moviesUpcoming },
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}

const getPreSaleTicket = async (req, res) => {
    try {
        const today = moment().startOf('day');
        const moviesPreSaleTicket = await DetailMovie.find({
            ticketOnSale: true,
            startDate: { $gte: today },
        });

        res.status(StatusCodes.OK).json({
            message: 'Vé bán trước',
            data: { moviesPreSaleTicket },
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}

const getDetailMovie = async (req, res) => {
    try {
        const movieName = req.params.movieName || req.query.movieName;

        if (!movieName) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                error: 'Tên phim không được trống',
            });
        }

        const movieDetail = await DetailMovie.findOne({
            movieName: movieName,
        });

        if (!movieDetail) {
            return res.status(StatusCodes.NOT_FOUND).json({
                error: 'Không tìm thấy chi tiết cho phim này',
            });
        }

        res.status(StatusCodes.OK).json({
            message: 'Chi tiết phim',
            data: { movieDetail },
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getMovieShowing,
    getUpcomingMovie,
    getPreSaleTicket,
    getDetailMovie,
    getAll
}