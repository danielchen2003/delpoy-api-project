const mongoose = require("mongoose")

let MONGODB_URI =
  process.env.MONGODB_URI ||
  process.env.PROD_MONGODB ||
  "mongodb://127.0.0.1:27017/plantsDatabase"

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("success connect to MongoDB")
  })
  .catch((e) => {
    console.error("conttions error", e.message)
  })

const db = mongoose.connection
module.exports = db
