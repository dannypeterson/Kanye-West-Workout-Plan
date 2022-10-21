const { Router } = require('express')
const router = Router()

router.get('/home', (req, res) => {
  res.send(
    'This is the root page which states the goal: Browse your favorite exercises so you can add them to your own workout plan. Then a button will display that says choose workouts'
  )
})

router.get('/workouts', (req, res) => {
  res.send(
    'This is the homepage that will show all 5 muscle groups (chest, back, etc).'
  )
})

router.get('/workouts/chest', (req, res) => {
  res.send('This is where the chest exercises will be displayed')
})
router.get('/workouts/back', (req, res) => {
  res.send('This is where the back exercises will be displayed')
})
router.get('/workouts/shoulders', (req, res) => {
  res.send('This is where the shoulder exercises will be displayed')
})
router.get('/workouts/arms', (req, res) => {
  res.send('This is where the arm exercises will be displayed')
})
router.get('/workouts/legs', (req, res) => {
  res.send('This is where the leg exercises will be displayed')
})

module.exports = router
