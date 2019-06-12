/* eslint-disable indent */
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
  }

  routes () {
		this.express.use(require('./routes'))
  }
}

module.exports = new App().express