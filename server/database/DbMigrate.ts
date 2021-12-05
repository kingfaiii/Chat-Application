require('dotenv').config()
const AccountsModel = require('./Schemas/Accounts')
const migrations = require('../database/controllers/MigrationsController')
const mongoose = require('mongoose')
require('./DbConnect')(mongoose)
interface AccountSeedInterface {
     username: string
     password: string
}

const data: AccountSeedInterface[] = [
     {
          username: 'calil@gmail.com',
          password: 'Jaudian29',
     },

     {
          username: 'jaudian@gmail.com',
          password: 'Jaudian29',
     },

     {
          username: 'christopher@gmail.com',
          password: 'Jaudian29',
     },
]

/* 
 MIGRATIONS IS A CLASS CONTROLLER
 rollback: (model) deletes the data in collection
 seed: (model, data) inserts (data) constant in specified parameter
*/

migrations.rollback(AccountsModel)

migrations.seed(AccountsModel, data)
