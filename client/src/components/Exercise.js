const Exercise = (props) => {
  return (
    <div className="exercisesmap">
      {props.exercises.map((exercise) => (
        <div key={exercise._id}>
          <h1>
            {exercise.name}{' '}
            <button
              className="addworkout"
              onClick={() => props.handleClick(exercise._id)}
            >
              +
            </button>
          </h1>
          <p>{exercise.description}</p>
          <img className="exerciseimg" src={exercise.img} alt="poster"></img>
        </div>
      ))}
    </div>
  )
}

export default Exercise
