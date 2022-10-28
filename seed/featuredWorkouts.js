const db = require('../db')
const { FeaturedWorkout } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const workouts = [
    {
      name: 'Thor Chest Workout',
      exercises: [],
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-1653735151.png'
    },
    {
      name: "'Girl you're thicker than a bowl of oatmeal' Workout",
      exercises: [],
      img: 'https://i.kym-cdn.com/photos/images/newsfeed/001/317/367/469.gif'
    },

    {
      name: "Get Goku's Back",
      exercises: [],
      img: 'https://i.pinimg.com/736x/5a/18/43/5a184307ea2a685e40808247fd00501e--back-muscles-file.jpg'
    }
  ]
  await FeaturedWorkout.insertMany(workouts)
  console.log('Added featured workouts')
}

const run = async () => {
  await main()
  db.close()
}

run()
