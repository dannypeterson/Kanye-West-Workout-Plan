const { Schema } = require('mongoose')

const FeaturedWorkout = new Schema(
  {
    name: { type: String, required: true },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
    img: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = FeaturedWorkout
