const mongoose = require('mongoose')
const validator = require('validator')
const CustomError = require('../errors')

const DetailMovieSchema = new mongoose.Schema(
    {
        movieName: {
            type: String,
            required: [true, 'Tên phim không được để trống'],
            minlength: 1,
            maxlength: 60,
            unique: true,
            validate: {
                validator: async function (value) {
                    const existingMovieName = await this.constructor.findOne({ movieName: value })
                    if (existingMovieName) {
                        throw new CustomError.BadRequestError('Tên phim đã tồn tại')
                    }
                }
            }
        },
        image: {
            type: String,
            required: [true, 'Vui lòng cung cấp poster phim'],
            unique: true,
            validate: {
                validator: async function (value) {
                    if (!validator.isURL(value)) {
                        throw new CustomError.BadRequestError('Vui lòng cung cấp URL hợp lệ')
                    }
                },
            },
        },
        description: {
            type: String,
            require: [true, 'Vui lòng nói thêm về phần mô tả'],
        },
        ageLimit: {
            type: String,
            enum: ['P', 'T18', 'T16', 'T13', 'K', 'C16'],
            required: [true, 'Không được để trống']
        },
        language: {
            type: [String],
            enum: ['Phụ đề', 'Lồng Tiếng'],
            required: [true, 'Không được để trống']
        },
        format: {
            type: String,
            enum: ['2D'],
            require: [true, 'Không được để trống']
        },
        directors: {
            type: String,
        },
        actors: {
            type: String,
        },
        cats: {
            type: [String],
            enum: ['Animation', 'Comedy', 'Drama', 'Horror', 'Romance', 'Action'],
            required: [true, 'Không được để trống']
        },
        duration: {
            type: Number,
            require: [true, 'Thời lượng không để trống']
        },
        startDate: {
            type: Date,
            required: [true, 'Chọn ngày khởi chiếu'],
        },
        endDate: {
            type: Date,
            required: [true, 'Ngày kết thúc chiếu'],
        },
        ticketOnSale: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('DetailMovie', DetailMovieSchema)
