const { Exercise, MuscleGroup } = require('../models/')
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

const getAllExercises = async (req, res) => {
  const exercise = await Exercise.find()
  res.json(exercise)
}

const findMuscleGroups = async (req, res) => {
  const group = await MuscleGroup.find()
  res.json(group)
}

module.exports = {
  getExerciseById,
  findMuscleGroups,
  getAllExercises
}
