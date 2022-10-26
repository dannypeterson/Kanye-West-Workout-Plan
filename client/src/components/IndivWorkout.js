import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const IndivWorkout = (props) => {
  const navigate = useNavigate()

  const [workout, setWorkout] = useState([])

  const { id } = useParams()

  const getExercises = async () => {
    const response = await axios.get(`http://localhost:3001/myworkouts/${id}`)
    setWorkout(response.data)
    console.log(response)
  }

  useEffect(() => {
    getExercises()
  }, [])

  const updateWorkout = () => {
    props.setFormState({
      name: workout.name,
      exercises: [...workout.exercises]
    })
    navigate(`/myworkouts/${id}/update`)
  }

  const deleteWorkout = async () => {
    const resonse = await axios.delete(`http://localhost:3001/myworkouts/${id}`)
    navigate('/myworkouts')
  }

  return (
    <div>
      {workout.exercises?.length > 0 &&
        workout.exercises.map((exercise) => (
          <div key={exercise._id}>
            <h1>
              {exercise.name} <button>x</button>
            </h1>
            <h2>
              {exercise.sets}x{exercise.reps}
            </h2>
          </div>
        ))}
      <button onClick={() => updateWorkout()}>Add exercises</button>
      <button onClick={() => deleteWorkout()}>Delete Workout</button>
    </div>
  )
}

export default IndivWorkout
