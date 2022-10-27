const db = require('../db')
const { FeaturedWorkout } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const workout1 = await new FeaturedWorkout({
    name: 'Thor Chest Workout',
    exercises: []
  })
}
