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

//chest exercises
router.get('/musclegroups/chest', controllers.getChestExercises)

//back exercises
router.get('/musclegroups/back', controllers.getBackExercises)

//shoulders
router.get('/musclegroups/shoulders', controllers.getShouldersExercises)

//arms
router.get('/musclegroups/arms', controllers.getArmsExercises)

//legs
router.get('/musclegroups/legs', controllers.getLegsExercises)

module.exports = router
