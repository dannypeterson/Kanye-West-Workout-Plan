const db = require('../db')
const { MuscleGroup, Exercise } = require('../models/')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  //seed exercises here
  const exercise1 = await new Exercise({
    bodyPart: ['chest'],
    name: 'Bench Press (Barbell)',
    description:
      'Lay flat on the bench with your eyes directly under the barbell and feet flat on the ground. Place your hands on the bar and position your pinkies to the first knurling gap. Slowly lift the bar off the rack and lower it to the highest protruding part of your chest. Once you touch your chest with the bar, push it back up while controlling the weight.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  exercise1.save()

  const exercise2 = await new Exercise({
    bodyPart: ['shoudlers'],
    name: 'Shoulder Press',
    description:
      'Position your hands a thumb-width away from the knurling. Unrack the bar and hold it even with your collarbone. Push the bar straight up over your head until your arms lock out. Carefully return the bar to the shoulder height position.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  exercise2.save()

  const exercise3 = await new Exercise({
    bodyPart: ['quads', 'hamstrings', 'glutes'],
    name: 'Barbell Squat',
    description:
      'Position the barbell on your back and squat down until at least knee height, preferrably ATG. Then come back up.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  exercise3.save()

  const exercise4 = await new Exercise({
    bodyPart: ['biceps'],
    name: 'Hammer curls',
    description:
      'Grab a dumbell, hold a neutral grip, and curl the dumbell using your elbow as an axis. Make sure to get the full range of motion.',
    equipment: 'Dumbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  exercise4.save()

  const exercise5 = await new Exercise({
    bodyPart: ['triceps'],
    name: 'Tricep extension',
    description: 'Grap a rope cable attachment and push the rope down',
    equipment: 'Cable, rope attatchment',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  exercise5.save()

  const exercise6 = await new Exercise({
    bodyPart: ['lats', 'rhomboids', 'traps', 'rear delts'],
    name: 'Barbell Row',
    description:
      'Holding a barbell with a pronated or supinated grip at knee height with your back bent and core engaged, pull the bar to your bellybutton following the path of your thighs. Then slowly return.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  exercise6.save()

  const exercise7 = await new Exercise({
    bodyPart: ['chest, triceps, shoulders'],
    name: 'Dips',
    description: 'Go down then back up',
    equipment: 'Dip bar',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  exercise7.save()

  //seed muscle groups here and reference exercise id
  const muscleGroups = [
    {
      name: 'Chest',
      exercises: [exercise1._id, exercise7._id]
    },
    {
      name: 'Back',
      exercises: [exercise6._id]
    },
    {
      name: 'Shoulders',
      exercises: [exercise2._id, exercise7._id]
    },
    {
      name: 'Arms',
      exercises: [exercise4._id, exercise5._id, exercise7._id]
    },
    {
      name: 'Legs',
      exercises: [exercise3._id]
    }
  ]

  await MuscleGroup.insertMany(muscleGroups)
  console.log('Created muscle groups with exercises')
}

const run = async () => {
  await main()
  db.close()
}

run()
