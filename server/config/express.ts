module.exports = (app: any) => {
     const express = require('express')
     const cors = require('cors')

     app.use(express.json())
     app.use(express.urlencoded({ extended: false }))
     app.use(cors())
}
