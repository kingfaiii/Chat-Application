import { Schema, Document, model } from 'mongoose'
const schemaNames = require('../../config/Constants/SchemaNames')

const referenceToAccounts: object = {
     type: Schema.Types.ObjectId,
     ref: schemaNames.accounts,
}

interface ChatInterface {
     message: string
     sender: string
     receiver: string
     seen: boolean
     timestamps: string
}

const ChatSchema: Schema = new Schema(
     {
          message: { type: String, require: true },
          sender: referenceToAccounts,
          receiver: referenceToAccounts,
          seen: { type: Boolean, default: false },
     },
     { timestamps: true }
)

module.exports = model<ChatInterface>(schemaNames.chats, ChatSchema)
