const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => {
  res.send(
    'This is the root page which states the goal: Browse your favorite exercises so you can add them to your own workout plan. Then a button will display that says choose workouts'
  )
})

//exercises
router.get('/exercises/:id', controllers.getExerciseById)
router.put('/exercises/:id', controllers.updateExercise)

router.get('/exercise', controllers.getAllExercises)
router.post('/exercise', controllers.createExercise)
router.delete('/exercises/:id', controllers.deleteExerciseById)

//muscle groups
router.get('/musclegroups', controllers.findMuscleGroups)
router.get('/musclegroups/:id', controllers.populateExercises)

//my workouts
router.get('/myworkouts', controllers.getMyWorkouts)
router.post('/myworkouts', controllers.postWorkout)

router.get('/myworkouts/:id', controllers.getMyWorkoutById)
router.put('/myworkouts/:id', controllers.updateWorkout)
router.delete('/myworkouts/:id', controllers.deleteWorkout)

//featured workouts
router.get('/featured', controllers.getFeaturedWorkouts)

module.exports = router
