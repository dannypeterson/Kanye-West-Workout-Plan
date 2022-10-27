const mongoose = require('mongoose')
const exerciseSchema = require('./Exercise')
const muscleGroupSchema = require('./MuscleGroup')
const myWorkoutSchema = require('./MyWorkout')
const featuredWorkoutSchema = require('./FeaturedWorkout')

const Exercise = mongoose.model('Exercise', exerciseSchema)
const MuscleGroup = mongoose.model('MuscleGroup', muscleGroupSchema)
const MyWorkout = mongoose.model('MyWorkout', myWorkoutSchema)
const FeaturedWorkout = mongoose.model('FeaturedWorkout', featuredWorkoutSchema)

module.exports = {
  Exercise,
  MuscleGroup,
  MyWorkout,
  FeaturedWorkout
}
