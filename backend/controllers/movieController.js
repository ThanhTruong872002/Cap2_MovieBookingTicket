const { DetailMovie } = require('../models')
const moment = require('moment')
const { StatusCodes } = require('http-status-codes')
const mongoose = require('mongoose')

const getMovieShowing = async (req, res) => {
    try {
        const today = moment().startOf('day');
        const moviesNowPlaying = await DetailMovie.find({
            ticketOnSale: true,
            startDate: { $lte: today },
            endDate: { $gte: today }
        }, {
            _id: 1,
            movieName: 1,
            image: 1,
            ageLimit: 1,
            language: 1,
            format: 1,
            cats: 1,
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
        }, {
            _id: 1,
            movieName: 1,
            image: 1,
            ageLimit: 1,
            language: 1,
            format: 1,
            cats: 1,
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
        }, {
            _id: 1,
            movieName: 1,
            image: 1,
            ageLimit: 1,
            language: 1,
            format: 1,
            cats: 1,
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
        const movieId = req.params.id;

        if (!movieId || !mongoose.Types.ObjectId.isValid(movieId)) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                error: 'ID phim không hợp lệ',
            });
        }

        const movieDetail = await DetailMovie.findById(movieId, {
            _id: 1,
            movieName: 1,
            image: 1,
            ageLimit: 1,
            language: 1,
            format: 1,
            cats: 1,
            description: 1,
            actors: 1,
            directors: 1,
            startDate: 1,
            duration: 1
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
    getDetailMovie
}