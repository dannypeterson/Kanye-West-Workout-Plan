import axios from "axios"
import { useState, useEffect } from "react"
import Exercise from "../components/Exercise"
import Header from "../components/Header"
import { useParams } from "react-router-dom"

const ExerciseList = (props) => {

  
  const [exercises, setExercises] = useState([])
  
  const { id } = useParams()

const findWorkouts = async () => {
  const response = await axios.get(`http://localhost:3001/musclegroups/${id}`)
  setExercises(response.data.exercises)
}

useEffect(() => {
findWorkouts()
},[])

  return(
    <div>
      <Header />
      <h1>Exercises</h1>
      <div>
        <Exercise exercises={exercises} findWorkouts={findWorkouts}/>
      </div>
    </div>
  )
}

export default ExerciseList