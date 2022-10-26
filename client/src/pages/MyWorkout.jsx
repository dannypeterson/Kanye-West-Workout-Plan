import { useState, useEffect } from "react"
import axios from "axios"


const MyWorkout = () => {

const [myWorkouts, setMyWorkouts] = useState([])

  const getMyWorkouts = async () => {
    const response = await axios.get('http://localhost:3001/myworkouts')
    console.log(response)
    setMyWorkouts(response.data)
  }

  useEffect(() => {
getMyWorkouts()
  },[])

  return(
    <div>
      <h1>My workouts:</h1>
      {myWorkouts.map((myWorkout) => (
      <h2>{myWorkout.name}</h2>
      ))}
    </div>
  )
}

export default MyWorkout