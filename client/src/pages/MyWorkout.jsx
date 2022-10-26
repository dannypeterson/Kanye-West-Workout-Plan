import { useState, useEffect } from "react"
import axios from "axios"
import IndivWorkout from "../components/IndivWorkout"
import { useNavigate, Link } from "react-router-dom"


const MyWorkout = () => {

const navigate = useNavigate()

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
      <Link to={`/myworkouts/${myWorkout._id}`} key={myWorkout._id}
      className="myworkout">{myWorkout.name}</Link>
      ))}
    </div>
  )
}

export default MyWorkout