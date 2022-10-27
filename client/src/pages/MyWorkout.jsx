import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Header from "../components/Header"


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
    <div className="workoutlist">
<Header />
<div id="myworkouts">
  <h1>My workouts:</h1>
</div>
    <div>
      
      {myWorkouts.map((myWorkout) => (
      <Link to={`/myworkouts/${myWorkout._id}`} key={myWorkout._id}
      className="myworkout">{myWorkout.name}</Link>
      ))}
    </div>

    <div id="addbutton">
      <button onClick={() => navigate('/musclegroups')}>Create workout</button>
    </div>

    </div>
  )
}

export default MyWorkout