const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/home', (req, res) => {
  res.send(
    'This is the root page which states the goal: Browse your favorite exercises so you can add them to your own workout plan. Then a button will display that says choose workouts'
  )
})

//exercises
router.get('/exercises', controllers.getAllExercises)
router.get('/exercises/:id', controllers.getExerciseById)
router.post('/exercises', controllers.createExercise)
router.delete('/exercises/:id', controllers.deleteExerciseById)
router.put('/exercises/:id', controllers.updateExercise)

//muscle groups
router.get('/musclegroups', controllers.findMuscleGroups)

//chest workouts
router.get('/musclegroups/chest', (req, res) => {
  res.send('This is where the chest exercises will be displayed')
})

//back workouts
router.get('/musclegroups/back', (req, res) => {
  res.send('This is where the back exercises will be displayed')
})

//shoulders
router.get('/musclegroups/shoulders', (req, res) => {
  res.send('This is where the shoulder exercises will be displayed')
})

//arms
router.get('/musclegroups/arms', (req, res) => {
  res.send('This is where the arm exercises will be displayed')
})

//legs
router.get('/musclegroups/legs', (req, res) => {
  res.send('This is where the leg exercises will be displayed')
})

module.exports = router
