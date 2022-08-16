const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')
const routes = require('./routes')
const port = process.env.PORT || 3002
const mongodb_url = process.env.MONGODB_URL

mongoose.connect(mongodb_url)

const server = Hapi.server({
    port,
    host: 'localhost',
    routes: {
        cors: true
    }
})

for (let route in routes) {
    server.route(routes[route])
}

server.start().then(() => {
    console.log('Server running on %s', server.info.uri)
})

server.listen(port, mongodb_url, function() {
    console.log('Listening on port %d', port);
})