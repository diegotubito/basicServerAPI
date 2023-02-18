const express = require('express')
const cors = require('cors')

// This is like creating an Enum in Swift
const RoutePath = {
    user: "/user/v1",
    sale: "/sale/v1"
}

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        // Middlewares
        this.middleware()

        // Routes
        this.routes()
    }

    middleware() {
        // Setup a Json format for body request
        this.app.use(express.json())
        
        // This is for security reason
        this.app.use(cors())

        // enable Public folder
        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use(RoutePath.user, require('../routes/user'))
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server at port: ', this.port)
        })
    }

}

module.exports = Server