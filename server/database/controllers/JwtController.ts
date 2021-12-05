const jwt = require('jsonwebtoken')
import { Request } from 'express'

interface payload {
     id: string
}

class Authencation {
     public isAuthenticated = async (req: Request) => {
          const encrypted: string = req.headers['authorization']!
          if (!encrypted) throw new Error('No Auth Provided')

          const decodedObj: object = await this.verify(encrypted)

          return decodedObj
     }

     private sign = (payload: payload) => {
          return new Promise<string>((resolve, reject) => {
               return jwt.sign(
                    {
                         id: payload.id,
                    },
                    process.env.TOKEN_SECRET,
                    {
                         expiresIn: '1d',
                    },
                    (err: any, token: string) => {
                         return err ? reject(err) : resolve(token)
                    }
               )
          })
     }

     private verify = (token: string) => {
          return new Promise<object>((resolve, reject) => {
               return jwt.verify(
                    token,
                    process.env.TOKEN_SECRET,
                    (err: any, decoded: object) => {
                         return err ? reject(err) : resolve(decoded)
                    }
               )
          })
     }
}

module.exports = new Authencation()
