const { Schema } = require('mongoose')
// const Schema = mongoose.Schema

const MuscleGroup = new Schema(
  {
    name: { type: String, required: true },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  },
  { timestamps: true }
)

module.exports = MuscleGroup
