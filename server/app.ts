require('dotenv').config()
import express from 'express'
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server, {
     cors: { origin: '*' },
})

app.set('socketio', io)

require('./config/express')(app)
require('./database/DbConnect')(require('mongoose'))

app.get('/', (req: express.Request, res: express.Response) => {
     res.json({
          message: 'Chat app',
     })
})

require('./config/routes/routes')(app)

// setup server
const PORT = process.env.PORT || 4040
server.listen(PORT, () => console.log(`server is running on port:${PORT}`))
