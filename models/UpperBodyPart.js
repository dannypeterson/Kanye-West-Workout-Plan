const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UpperBodyPart = new Schema(
  {
    name: { type: String, required: true },
    workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout' }]
  },
  { timestamps: true }
)

module.exports = UpperBodyPart
