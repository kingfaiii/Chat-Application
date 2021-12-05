import { Model, Schema } from 'mongoose'

class Migrations {
     rollback = async (model: Model<Schema>) => {
          try {
               await model?.deleteMany({})
          } catch (err) {
               console.log(err)
          }
     }

     latest = async (model: Model<Schema>) => {
          model.deleteMany({})
     }

     seed = async (model: Model<Schema>, seed: any) => {
          try {
               const collectionName = model?.collection?.collectionName
               const exists = await model?.find()

               if (exists.length <= 0) {
                    let inserted = await model?.insertMany(seed)
                    if (inserted) console.log(collectionName, 'migrated')
               } else {
                    console.log('migration error on: ', collectionName)
               }
          } catch (err) {
               console.log(err)
          }
     }
}

module.exports = new Migrations()
