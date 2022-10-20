const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Workout = new Schema(
  {
    bodyPart: { type: String, required: true },
    description: { type: String, required: true },
    equipment: { type: String, required: true },
    sets: { type: Integer, required: false },
    reps: { type: Integer, required: false },
    rpe: { type: Integer, required: false }
  },
  { timestamps: true }
)

module.exports = Workout
