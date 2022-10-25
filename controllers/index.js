const { Exercise, MuscleGroup } = require('../models/')
const db = require('../db')

//functions for router
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
  // const { id } = req.params
  const exercise = await new Exercise(req.body)
  await exercise.save()
  res.send(exercise)
  console.log('Created new exercise')
  // const updateGroup = await MuscleGroup.updateOne(
  //   { _id: id },
  //   { $push: { exercises: exercise } }
  // )
  // return res.send(`Pushed exercise to ${id} array`)
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

module.exports = {
  getExerciseById,
  findMuscleGroups,
  getAllExercises,
  createExercise,
  deleteExerciseById,
  updateExercise,
  populateExercises
}
