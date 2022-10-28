import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

const Featured = () => {
  const { id } = useParams()

  const [workout, setWorkout] = useState([])

  const getWorkout = async () => {
    const response = await axios.get(`http://localhost:3001/featured/${id}`)
    setWorkout(response.data)
  }

  useEffect(() => {
    getWorkout()
  }, [])

  return (
    <div className="featuredworkout">
      <Header />
      <h1 id="myworkouts">{workout.name}</h1>
      {workout.exercises?.length > 0 &&
        workout.exercises.map((exercise) => (
          <div className="customworkout" key={exercise._id}>
            <h1>{exercise.name}</h1>
            <h2>
              {exercise.sets}x{exercise.reps}
            </h2>
          </div>
        ))}
    </div>
  )
}

export default Featured
