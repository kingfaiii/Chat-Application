import { Schema, Document, model } from 'mongoose'
const schemaNames = require('../../config/Constants/SchemaNames')

const stringRequired: object = {
     type: String,
     require: true,
}
interface AccountsInterface extends Document {
     username: string
     password: string
     contacts?: string[]

     timestamps: string
}

const Accounts: Schema = new Schema(
     {
          username: stringRequired,
          password: stringRequired,
          contacts: [
               {
                    type: Schema.Types.ObjectId,
                    ref: schemaNames.accounts,
                    default: [],
               },
          ],
     },
     { timestamps: true }
)

module.exports = model<AccountsInterface>(schemaNames.accounts, Accounts)
