const {
  Exercise,
  MuscleGroup,
  MyWorkout,
  FeaturedWorkout
} = require('../models/')
const db = require('../db')

const getExerciseById = async (req, res) => {
  try {
    const { id } = req.params
    const exercise = await Exercise.findById(id)
    if (!exercise) throw Error('Exercise not found!')
    res.json(exercise)
  } catch (error) {
    console.log(error)
    res.send('Exercise not found.')
  }
}

const findMuscleGroups = async (req, res) => {
  const group = await MuscleGroup.find()
  res.json(group)
}

const getAllExercises = async (req, res) => {
  const exercise = await Exercise.find()
  res.json(exercise)
}

const deleteExerciseById = async (req, res) => {
  const { id } = req.params
  const deleteExercise = await Exercise.findByIdAndDelete(id)
  if (deleteExercise) {
    return res.send('Exercise deleted')
  }
}

const createExercise = async (req, res) => {
  const exercise = await new Exercise(req.body)
  await exercise.save()
  res.send(exercise)
  console.log('Created new exercise')
}

const updateExercise = async (req, res) => {
  const { id } = req.params
  const exercise = await Exercise.findByIdAndUpdate(id, req.body)
  if (exercise) {
    return res.send('Updated exercise')
  }
}

const populateExercises = async (req, res) => {
  const { id } = req.params
  const group = await MuscleGroup.findById(id)
    .populate('exercises')
    .exec((err, exercises) => {
      res.send(exercises)
    })
}

const postWorkout = async (req, res) => {
  const workout = await new MyWorkout(req.body)
  await workout.save()
  res.send(workout)
  console.log('Created new workout')
}

const getMyWorkouts = async (req, res) => {
  const workout = await MyWorkout.find()
  res.send(workout)
}

const getMyWorkoutById = async (req, res) => {
  const { id } = req.params
  const workout = await MyWorkout.findById(id)
    .populate('exercises')
    .exec((err, exercises) => {
      res.send(exercises)
    })
}
const getFeaturedWorkouts = async (req, res) => {
  const workout = await FeaturedWorkout.find()
  res.send(workout)
}

const updateWorkout = async (req, res) => {
  const { id } = req.params
  const workout = await MyWorkout.findByIdAndUpdate(id, req.body, { new: true })
  if (workout) {
    return res.send('Updated exercise')
  }
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params
  const workout = await MyWorkout.findByIdAndDelete(id)
  res.send('Exercise deleted')
}

module.exports = {
  getExerciseById,
  findMuscleGroups,
  getAllExercises,
  createExercise,
  deleteExerciseById,
  updateExercise,
  populateExercises,
  getMyWorkouts,
  getFeaturedWorkouts,
  postWorkout,
  getMyWorkoutById,
  updateWorkout,
  deleteWorkout
}
