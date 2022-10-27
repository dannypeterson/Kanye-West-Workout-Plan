const { Schema } = require('mongoose')

const Exercise = new Schema(
  {
    name: { type: String, required: true },
    bodyPart: [{ type: String, required: true }],
    description: { type: String, required: true },
    equipment: { type: String, required: true },
    sets: { type: Number, required: false },
    reps: { type: String, required: false },
    img: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Exercise
