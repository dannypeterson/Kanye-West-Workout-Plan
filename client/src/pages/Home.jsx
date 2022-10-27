import React from "react"
import { Link } from 'react-router-dom'

const Home = () => {
  
  
  return(
    <div className="homepage">

      <div className="home title">
      <h1>Welcome to the New Workout Plan.</h1>
      <h2> Its time to stop putting off the gym and time to start prioritizing your health.</h2>
      <h2>Select a featured workout plan to get started, or create your own!</h2>
      </div>

      <div className="homebuttons">
        <div id="link1">
          <Link className="homebutton" to="/musclegroups">Create Workout</Link>
        </div>
        <div id="link2">
          <Link className="homebutton" to="/myworkouts">My Workouts</Link>
        </div>
        <div id="link3">
          <Link className="homebutton" to="/featured">Featured Workouts</Link>
        </div>
      </div>

    </div>
  )
}

export default Home