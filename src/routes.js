const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')

routes.post('/api/users', controllers.UserController.store)

routes.post('/api/sessions',controllers.SessionController.store)

routes.use(authMiddleware)

// Ads
routes.get('/api/ads', controllers.AdController.index)
routes.get('/api/ads/:id', controllers.AdController.show)
routes.post('/api/ads', controllers.AdController.store)
routes.put('/api/ads/:id', controllers.AdController.update)
routes.delete('/api/ads/:id', controllers.AdController.destroy)

module.exports = routes
