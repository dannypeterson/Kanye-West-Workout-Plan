import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header'

const IndivWorkout = (props) => {
  const navigate = useNavigate()

  const [workout, setWorkout] = useState([])

  const { id } = useParams()

  const getExercises = async () => {
    const response = await axios.get(`http://localhost:3001/myworkouts/${id}`)
    setWorkout(response.data)
  }

  useEffect(() => {
    getExercises()
    props.setMyPage(true)
  }, [])

  const updateWorkout = () => {
    props.setFormState({
      name: workout.name,
      exercises: [...workout.exercises]
    })
    navigate(`/myworkouts/${id}/update`)
  }

  const deleteWorkout = async () => {
    const response = await axios.delete(
      `http://localhost:3001/myworkouts/${id}`
    )
    navigate('/myworkouts')
  }

  return (
    <div>
      <Header myPage={props.myPage} />
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
      <button className="addexercise" onClick={() => updateWorkout()}>
        Add exercises
      </button>
      <button className="deleteexercise" onClick={() => deleteWorkout()}>
        Delete Workout
      </button>
    </div>
  )
}

export default IndivWorkout
