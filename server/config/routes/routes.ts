import express from 'express'

module.exports = (app: express.Application) => {
     app.use('/api/v1', require('./users/users.routes'))

     /* ERROR HANDLERS */
     app.use('/api/v1', require('./middlewares/Middlewares').errorHandler)
     app.use('/api/v1', require('./middlewares/Middlewares').notFound)
}
