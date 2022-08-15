const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')
const port = process.env.PORT
const mongodb_url = process.env.MONGODB_URL

mongoose.connect(mongodb_url)

const server = Hapi.server({
    port,
    host: 'localhost'
})

server.start().then(() => {
    console.log('Server running on %s', server.info.uri)
})