const mongoose = require('mongoose')
const exerciseSchema = require('./Exercise')
const muscleGroupSchema = require('./MuscleGroup')

const Exercise = mongoose.model('Exercise', exerciseSchema)
const MuscleGroup = mongoose.model('MuscleGroup', muscleGroupSchema)

module.exports = {
  Exercise,
  MuscleGroup
}
