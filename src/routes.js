const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.post('/api/users', UserController.store)

module.exports = routes
