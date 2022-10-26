import React from "react"
import { Link } from 'react-router-dom'

const Home = () => {
  
  
  return(
    <div className="homepage">

      <div className="home title">
      <h1>Welcome to the New Workout Plan.</h1>
      <h2> Its time to stop putting off the gym and time to start prioritizing your health.</h2>
      <p>Everyone wants to achieve greatness, but few do. We all have the same 24 hours, it just depends on how you use it. </p>
      <h2>Select a featured workout plan to get started, or create your own!</h2>
      </div>

      <div className="homebutton">
        <div>
          <Link to="/musclegroups">Create Workout</Link>
        </div>
        <div>
          <Link to="/myworkouts">My Workouts</Link>
        </div>
        <div>
          <Link to="/featured">Featured Workouts</Link>
        </div>
      </div>

    </div>
  )
}

export default Home