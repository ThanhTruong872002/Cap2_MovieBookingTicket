require('dotenv').config()
require('express-async-errors')

// express
const express = require('express')
const app = express()

// database
const connectDB = require('./configs/db')

// package
const cors = require('cors')

// config
const { corsConfig } = require('./configs/')

// middleware
const { notFoundMidd, errorHandlerMidd } = require('./middlewares')

// routes
const { authRouter } = require('./routes')

app.set('trust proxy', 1)
app.use(cors(corsConfig))
app.use(express.json())

app.use('/api/v1/auth', authRouter)

app.use(notFoundMidd)
app.use(errorHandlerMidd)

const port = process.env.PORT || 5555
const start = async () => {
    try {
        await connectDB(process.env.DB_URL)
        app.listen(port, () =>
            console.log(`Server listenning on port ${port}...`)
        )
    } catch (err) {
        console.log(`Server run with error: ${err}`)
    }
}

start()
