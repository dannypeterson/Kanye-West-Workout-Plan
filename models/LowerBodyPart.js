const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LowerBodyPart = new Schema(
  {
    name: { type: String, required: true },
    workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout' }]
  },
  { timestamps: true }
)

module.exports = LowerBodyPart
