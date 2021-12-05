module.exports = (mongoose: any) => {
     mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
     })

     const db = mongoose.connection
     db.on('error', (err: string) => console.error(err))

     db.once('open', () => {
          console.log('db connected...')
     })
}
