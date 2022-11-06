import axios from 'axios'
import { useState, useEffect } from 'react'
import Exercise from '../components/Exercise'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const ExerciseList = (props) => {
  const [exercises, setExercises] = useState([])
  const [groupName, setGroupName] = useState([])

  const { id } = useParams()

  const findWorkouts = async () => {
    const response = await axios.get(`/api/musclegroups/${id}`)
    setGroupName(response.data.name)
    setExercises(response.data.exercises)
  }

  useEffect(() => {
    findWorkouts()
  }, [])

  //push id to workout.exercises array
  const handleClick = (id) => {
    if (!props.formState.exercises.includes(id)) {
      props.setFormState({
        ...props.formState,
        exercises: [...props.formState.exercises, id]
      })
    }
  }

  return (
    <div>
      <Header backButton={props.backButton} />
      <h1 id="myworkouts">{groupName} Exercises</h1>
      <div className="exercises">
        <Exercise
          exercises={exercises}
          findWorkouts={findWorkouts}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default ExerciseList
