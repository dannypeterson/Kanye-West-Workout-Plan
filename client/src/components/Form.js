import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'

const Form = () => {
  const [exercises, setExercises] = useState([])

  const getExercises = async () => {
    const response = await axios.get('/api/exercise')
    console.log(response.data)
    setExercises(response.data)
  }

  useEffect(() => {
    getExercises()
  }, [])

  const initialState = {
    name: '',
    description: '',
    equipment: '',
    sets: '',
    reps: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post('http://localhost:3001/exercise', formState)
    console.log(response)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  // //delete function
  // const deleteExercise = async () => {
  //   const response = await axios.delete(`http://localhost:3001/exercises/${id}`)
  // }

  return (
    <div>
      Create New exercise
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of Exercise: </label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          value={formState.name}
        />

        <label htmlFor="description">Description: </label>
        <textarea
          onChange={handleChange}
          value={formState.description}
          id="description"
          cols="30"
          rows="10"
        ></textarea>

        <label htmlFor="equipment">Equipment: </label>
        <input
          onChange={handleChange}
          type="text"
          id="equipment"
          value={formState.equipment}
        />

        <label htmlFor="sets">Sets: </label>
        <input
          onChange={handleChange}
          type="text"
          id="sets"
          value={formState.sets}
        />

        <label htmlFor="reps">Reps: </label>
        <input
          onChange={handleChange}
          type="text"
          id="reps"
          value={formState.reps}
        />

        <button type="submit">Send</button>
      </form>
      <h2>Exercises:</h2>
      {exercises.map((exercise) => (
        <div key={exercise._id}>
          <h3>
            {exercise.name}
            <button>Delete</button>
          </h3>
        </div>
      ))}
    </div>
  )
}

export default Form
