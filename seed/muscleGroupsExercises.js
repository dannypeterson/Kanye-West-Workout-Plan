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
    rpe: 9,
    img: 'https://musclewiki.com/media/uploads/male-barbell-bench-press-front_C2G7O8r.gif'
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
    rpe: 9,
    img: 'https://musclewiki.com/media/uploads/male-barbell-overhead-press-side_rFqqcjI.gif'
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
    rpe: 9,
    img: 'https://musclewiki.com/media/uploads/male-barbell-highbar-squat-side_bU7Qudy.gif'
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
    rpe: 9,
    img: 'https://musclewiki.com/media/uploads/male-dumbbell-hammer-curl-side_io6oHN7.gif'
  })
  exercise4.save()

  const exercise5 = await new Exercise({
    bodyPart: ['triceps'],
    name: 'Tricep extension',
    description: 'Grap a rope cable attachment and push the rope down',
    equipment: 'Cable, rope attatchment',
    sets: 4,
    reps: '10-12',
    rpe: 9,
    img: 'https://musclewiki.com/media/uploads/male-cable-pushdown-front.gif'
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
    rpe: 9,
    img: 'https://musclewiki.com/media/uploads/male-barbell-bent-over-row-side.gif'
  })
  exercise6.save()

  const exercise7 = await new Exercise({
    bodyPart: ['chest, triceps, shoulders'],
    name: 'Dips',
    description: 'Go down then back up',
    equipment: 'Dip bar',
    sets: 4,
    reps: '10-12',
    rpe: 9,
    img: 'https://musclewiki.com/media/uploads/male-bodyweight-dips-front.gif'
  })
  exercise7.save()

  const inclineBench = await new Exercise({
    bodyPart: ['chest, shoulders'],
    name: 'Incline Bench Press (Barbell)',
    description:
      'Position the bench between 30 and 45 degrees. Lay flat on the bench with your feet on the ground. With straight arms unrack the bar. Lower the bar to your mid chest. Raise the bar (slowly and controlled) until you have locked your elbows.',
    equipment: 'Barbell',
    sets: 4,
    reps: '10-12',
    img: 'https://musclewiki.com/media/uploads/male-barbell-incline-bench-press-side.gif'
  })
  inclineBench.save()

  const dumbellFlys = await new Exercise({
    bodyPart: ['chest'],
    name: 'Dumbell Flys',
    description:
      'Lay flat on the bench and place your feet on the ground. Begin the exercise with the dumbbells held together above your chest, elbows slightly bent. Simultaneously lower the weights to either side. Pause when the weights are parallel to the bench, then raise your arms to the starting position.',
    equipment: 'Dumbells',
    sets: 4,
    reps: '10-12',
    img: 'https://musclewiki.com/media/uploads/male-dumbbell-incline-chest-flys-front.gif'
  })
  dumbellFlys.save()

  const dumbellIncline = await new Exercise({
    bodyPart: ['upper chest'],
    name: 'Incline Dumbell Bench Press',
    description:
      'Raise the bench to a 30 - 45 degree angle. Lay on the bench and set your feet on the ground. Raise the dumbbells with straight arms then slowly lower them to about shoulder width. Raise them again until your arms are locked and at the starting position again.',
    equipment: 'Dumbells',
    sets: 3,
    reps: '10-12',
    img: 'https://musclewiki.com/media/uploads/male-dumbbell-incline-bench-press-side.gif'
  })
  dumbellIncline.save()

  const dumbellBench = await new Exercise({
    bodyPart: ['chest'],
    name: 'Dumbell Bench Press',
    description:
      'Bench normally but with dumbells. Make sure to tuck in your elbows.',
    equipment: 'Dumbells',
    sets: 4,
    reps: '10-12',
    img: 'https://musclewiki.com/media/uploads/male-dumbbell-bench-press-front_hHiClQx.gif'
  })
  dumbellBench.save()
  //back
  const exercise8 = await new Exercise({
    bodyPart: ['back'],
    name: 'Dumbell Row',
    description:
      'Brace your off arm against something stable (bench, box). Stagger your stance so your leg on the side of your working arm is back. Try to get your torso to parallel with the ground. That will extend your range of motion. Let your arm hang freely and then pull your elbow back. Imagine you got a tennis ball in your armpit and squeeze it each rep.',
    equipment: 'Dumbells',
    sets: 4,
    reps: '10-12',
    img: 'https://musclewiki.com/media/uploads/male-dumbbell-unilateral-row-side.gif'
  })
  exercise8.save()

  const exercise9 = await new Exercise({
    bodyPart: ['back'],
    name: 'Barbell Row',
    description:
      'Grab a barbell with pronated or supinated grip shoulder width apart. Bend forward at your hips and pull the weight from your knees to your bellybutton, then return slowly',
    equipment: 'Barbell',
    sets: 5,
    reps: '8',
    img: 'https://musclewiki.com/media/uploads/male-barbell-bent-over-row-side.gif'
  })
  exercise9.save()

  const exercise10 = await new Exercise({
    bodyPart: ['back'],
    name: 'Lat Pulldown',
    description:
      'Grab pulldown bar shoulder width apart, contract your scalpula, and pull through your elbows until the bar is under your chin. Then slowly return.',
    equipment: 'Cable Machine',
    sets: 4,
    reps: '10',
    img: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_To_Do_The_Lat_Pull_Down_Lat_Pull_Down.gif?h=840'
  })
  exercise10.save()

  const exercise11 = await new Exercise({
    bodyPart: ['back'],
    name: 'Cable Pullover',
    description:
      'Grab your attachment and walk a few steps back. Push your butt back to where you are leaning forward somewhat. Initiate the movement with your shoulders and not your elbows. Imagine trying to pull the attachment through your thighs at the bottom.',
    equipment: 'Cable Machine',
    sets: 4,
    reps: '12-15',
    img: 'https://musclewiki.com/media/uploads/male-cable-pullover-front.gif'
  })
  exercise11.save()
  //shoulders
  const exercise12 = await new Exercise({
    bodyPart: ['side delts'],
    name: 'Dumbell Lateral Raises',
    description:
      'Raise your arms on both sides with a slight bend in the elbow until they are parallel with the floor',
    equipment: 'Dumbells',
    sets: 4,
    reps: '12-15',
    img: 'https://musclewiki.com/media/uploads/male-dumbbell-lateral-raise-front.gif'
  })
  exercise12.save()

  const exercise13 = await new Exercise({
    bodyPart: ['biceps'],
    name: 'Dumbell Curls',
    description:
      'You know how to do these. Control the weight. Do not use momentum.',
    equipment: 'Dumbells',
    sets: 4,
    reps: '10',
    img: 'https://musclewiki.com/media/uploads/male-dumbbell-curl-side.gif'
  })
  exercise13.save()

  const exercise14 = await new Exercise({
    bodyPart: ['biceps, forearms'],
    name: 'Zottman Curls',
    description:
      'Hammer curl up into a supinated grip, then switch to a pronated grip and go down slowly. These ones burn.',
    equipment: 'Dumbells',
    sets: 4,
    reps: '10',
    img: 'https://i.makeagif.com/media/5-25-2016/-oAExo.gif'
  })
  exercise14.save()

  const exercise15 = await new Exercise({
    bodyPart: ['triceps'],
    name: 'Skull Crushers',
    description:
      'Take a shoulder width grip. Break at the elbows. Try to keep your elbows tucked in. Do not let them flare out. Stop the bar a few inches from your forehead and extend your elbows back up.',
    equipment: 'Cable Machine',
    sets: 3,
    reps: '8',
    img: 'https://musclewiki.com/media/uploads/male-barbell-skullcrusher-side_B7Z6225.gif'
  })
  exercise15.save()
  //legs
  const exercise16 = await new Exercise({
    bodyPart: ['quads'],
    name: 'Bulgarian Split Squats',
    description:
      'These suck. Place one foot on an elevated surface such as a bench and the other foot one step in front. Holding two dumbells, lunge into your forward foot and push back up.',
    equipment: 'Dumbells',
    sets: 3,
    reps: '10',
    img: 'https://musclewiki.com/media/uploads/male-dumbbell-bulgarian-split-squat-side.gif'
  })
  exercise16.save()

  const exercise17 = await new Exercise({
    bodyPart: ['hamstrings, glutes'],
    name: 'Romanian Deadlifts',
    description:
      'Hold the barbell shoulder width apart, then push your hips back like you are trying to close a car door with your butt. Lower the bar until you feel a good strech in your hamstrings then slowly return.',
    equipment: 'Barbell or Dumbells',
    sets: 4,
    reps: '10',
    img: 'https://musclewiki.com/media/uploads/male-barbell-romanian-deadlift-side_ir6cV9M.gif'
  })
  exercise17.save()

  //seed muscle groups here and reference exercise id
  const muscleGroups = [
    {
      name: 'Chest',
      exercises: [
        exercise1._id,
        exercise7._id,
        inclineBench._id,
        dumbellFlys._id,
        dumbellIncline._id,
        dumbellBench._id
      ]
    },
    {
      name: 'Back',
      exercises: [
        exercise6._id,
        exercise8._id,
        exercise9._id,
        exercise10._id,
        exercise11._id
      ]
    },
    {
      name: 'Shoulders',
      exercises: [exercise2._id, exercise7._id, exercise12._id]
    },
    {
      name: 'Arms',
      exercises: [
        exercise4._id,
        exercise5._id,
        exercise7._id,
        exercise13._id,
        exercise14._id,
        exercise15._id
      ]
    },
    {
      name: 'Legs',
      exercises: [exercise3._id, exercise16._id, exercise17._id]
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
