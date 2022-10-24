import axios from "axios"
import { useState, useEffect } from "react"
import Exercise from "../components/Exercise"
import { useNavigate, useParams } from "react-router-dom"

const ExerciseList = (props) => {

  let { name } = useParams()

const [exercises, setExercises] = useState([])


const findWorkouts = async () => {
  const response = await axios.get(`http://localhost:3001/musclegroups/${name}`)
  console.log(response)
  setExercises(response.data)
}

useEffect(() => {
findWorkouts()
},[])

  return(
    <div>
      <h1>{name} Exercises</h1>
      <div>
        <Exercise exercises={exercises} findWorkouts={findWorkouts}/>
      </div>
    </div>
  )
}

export default ExerciseList