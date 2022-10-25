import ExerciseList from "../pages/ExerciseList"

const Exercise = (props) => {


  return(
    <div className="exercises">
        {props.exercises.map((exercise) => (
          <div>
            <h2>{exercise.name}</h2>
            <h3>Sets: {exercise.sets}x{exercise.reps}</h3>
            <p>Equipment: {exercise.equipment}</p>
            <p>{exercise.description}</p>
          </div>
        ))}
    </div>
  )
}

export default Exercise