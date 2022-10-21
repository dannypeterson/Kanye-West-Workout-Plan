const db = require('../db')
const { Exercise } = require('../models/Exercise')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const exercise1 = await new Exercise({
    name: 'Bench Press (Barbell)',
    bodyParts: ['chest'],
    description:
      'Lay flat on the bench with your eyes directly under the barbell and feet flat on the ground. Place your hands on the bar and position your pinkies to the first knurling gap. Slowly lift the bar off the rack and lower it to the highest protruding part of your chest. Once you touch your chest with the bar, push it back up while controlling the weight.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise2 = await new Exercise({
    name: 'Shoulder Press',
    bodyParts: ['shoudlers'],
    description:
      'Position your hands a thumb-width away from the knurling. Unrack the bar and hold it even with your collarbone. Push the bar straight up over your head until your arms lock out. Carefully return the bar to the shoulder height position.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise3 = await new Exercise({
    name: 'Barbell Squat',
    bodyParts: ['quads', 'hamstrings', 'glutes'],
    description:
      'Position the barbell on your back and squat down until at least knee height, preferrably ATG. Then come back up.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise4 = await new Exercise({
    name: 'Hammer curls',
    bodyParts: ['biceps'],
    description:
      'Grab a dumbell, hold a neutral grip, and curl the dumbell using your elbow as an axis. Make sure to get the full range of motion.',
    equipment: 'Dumbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise5 = await new Exercise({
    name: 'Tricep extension',
    bodyParts: ['triceps'],
    description: 'Grap a rope cable attachment and push the rope down',
    equipment: 'Cable, rope attatchment',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise6 = await new Exercise({
    name: 'Barbell Row',
    bodyParts: ['lats', 'rhomboids', 'traps', 'rear delts'],
    description:
      'Holding a barbell with a pronated or supinated grip at knee height with your back bent and core engaged, pull the bar to your bellybutton following the path of your thighs. Then slowly return.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise7 = await new Exercise({
    name: '',
    bodyParts: [''],
    description: '',
    equipment: '',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise8 = await new Exercise({
    name: '',
    bodyParts: [''],
    description: '',
    equipment: '',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise9 = await new Exercise({
    name: '',
    bodyParts: [''],
    description: '',
    equipment: '',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
  const exercise10 = await new Exercise({
    name: '',
    bodyParts: [''],
    description: '',
    equipment: '',
    sets: 4,
    reps: '10-12',
    rpe: 9
  })
}
