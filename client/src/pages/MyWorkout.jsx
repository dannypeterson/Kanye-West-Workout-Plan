import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Header from "../components/Header"


const MyWorkout = (props) => {

const navigate = useNavigate()

const [myWorkouts, setMyWorkouts] = useState([])



  const getMyWorkouts = async () => {
    const response = await axios.get('/api/myworkouts')
    setMyWorkouts(response.data)
  }

  useEffect(() => {
getMyWorkouts()
  },[])


  return(
    <div className="myworkoutpage">
      <Header />
      <div className="workoutlist">
          <h1 id="myworkouts">My workouts:</h1>
        <div className="wbackground">  
      {myWorkouts.map((myWorkout) => (
      <Link to={`/myworkouts/${myWorkout._id}`} key={myWorkout._id}
      className="myworkout">{myWorkout.name}</Link>
      ))}
    </div>
      </div>
      

    <div id="addbutton">
      <button className="addbutton" onClick={() => navigate('/musclegroups')}>Create workout</button>
    </div>

    </div>
  )
}

export default MyWorkout