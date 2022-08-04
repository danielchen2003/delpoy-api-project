const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Plant = new Schema(
  {
    name: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("plants", Plant)
