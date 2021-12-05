import express from 'express'

interface ErrorParameter {
     message: string
     stack: string
}

exports.errorHandler = (
     error: ErrorParameter,
     req: express.Request,
     res: express.Response,
     next: express.NextFunction
) => {
     const statusCode: number = res.statusCode === 200 ? 500 : res.statusCode
     res.status(statusCode)

     res.json({
          error: {
               status: statusCode || 500,
               message: error.message || 'Internal Server Error',

               stack: process.env.NODE_ENV ? 'HEHE' : error.stack,
          },
     })
}

exports.notFound = (
     req: express.Request,
     res: express.Response,
     next: express.NextFunction
) => {
     res.status(404).json({
          status: 404,
          error: `${req.protocol}://${req.get('host')}${
               req.originalUrl
          } -> not found`,
     })
}
