import express from 'express'
const router = express.Router()
const controller = require('../../../database/controllers/AccountController')

router.post('/register/accounts', controller.register)

router.post('/login/accounts', controller.login)

router.patch('/add/contact', controller.addContact)

router.delete('/remove/contact/:_id', controller.removeContact)

router.get('/registered/accounts', controller.registeredAccounts)
module.exports = router
