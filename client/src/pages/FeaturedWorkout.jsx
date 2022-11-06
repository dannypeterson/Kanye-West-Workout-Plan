import { useEffect, useState } from "react"
import Header from "../components/Header"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const FeaturedWorkout = () => {
const navigate = useNavigate()

const [workouts, setWorkouts] = useState([])

const getWorkouts = async () => {
  const response = await axios.get('/api/featured')
  setWorkouts(response.data)
}

useEffect(() => {
  getWorkouts()
},[])

  return(
    <div>
      <Header />
      <h1 id="myworkouts">Featured Workouts</h1>

      <div className="featured">
      {workouts.map((workout) => (
        <div onClick={() => navigate(`/featured/${workout._id}`)} key={workout._id} id="indiv">
        <h2 >{workout.name}</h2>
        <img id="featuredimg" src={workout.img} alt="img"></img>
        </div>
      ))}
      </div>

    </div>
  )
}

export default FeaturedWorkout