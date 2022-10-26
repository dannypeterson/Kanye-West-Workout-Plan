import { useState, useEffect } from "react"
import axios from "axios"
import IndivWorkout from "../components/IndivWorkout"

const MyWorkout = () => {

const [myWorkouts, setMyWorkouts] = useState([])
const [displayExercises, setDisplayExercises] = useState(false)

  const getMyWorkouts = async () => {
    const response = await axios.get('http://localhost:3001/myworkouts')
    console.log(response)
    setMyWorkouts(response.data)
  }

  useEffect(() => {
getMyWorkouts()
  },[])

const handleClick = async (id) => {
  const response = await axios.get(`http://localhost:3001/myworkouts/${id}`)
  console.log(response)
}


  return(
    <div>
      <h1>My workouts:</h1>
      {myWorkouts.map((myWorkout) => (
      <h2 key={myWorkout._id}
      onClick={() => handleClick(myWorkout._id)} 
      className="myworkout">{myWorkout.name}</h2>
      ))}
    </div>
  )
}

export default MyWorkout