import axios from "axios"
import { useState, useEffect } from "react"
import Exercise from "../components/Exercise"
import { useParams } from "react-router-dom"

const ExerciseList = (props) => {

  
  const [exercises, setExercises] = useState([])
  
  const { id } = useParams()

const findWorkouts = async () => {
  const response = await axios.get(`http://localhost:3001/musclegroups/${id}`)
  console.log(response)
  setExercises(response.data.exercises)
}

useEffect(() => {
findWorkouts()
},[])

  return(
    <div>
      <h1>Exercises</h1>
      <div>
        <Exercise exercises={exercises} findWorkouts={findWorkouts}/>
      </div>
    </div>
  )
}

export default ExerciseList