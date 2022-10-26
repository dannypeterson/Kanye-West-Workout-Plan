const Exercise = (props) => {
  return (
    <div className="exercises">
      {props.exercises.map((exercise) => (
        <div key={exercise._id}>
          <h2>
            {exercise.name}{' '}
            <button
              className="addworkout"
              onClick={() => props.handleClick(exercise._id)}
            >
              Add to workout
            </button>
          </h2>
          <h3>
            Sets: {exercise.sets}x{exercise.reps}
          </h3>
          <p>Equipment: {exercise.equipment}</p>
          <p>{exercise.description}</p>
          <img src={exercise.img} alt="poster"></img>
        </div>
      ))}
    </div>
  )
}

export default Exercise
