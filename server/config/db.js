const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose
    .set('strictQuery', false)
    .connect(process.env.MONGO_URI)
  console.log(`Database Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB
