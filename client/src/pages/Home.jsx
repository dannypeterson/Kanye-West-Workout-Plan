import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

const Home = (props) => {
  
  const navigate = useNavigate()

  return(
    <div className="homepage">
      <Header homePage={props.homePage}/>
      <h1 id="myworkouts">Welcome to the New Workout Plan.</h1>
      
      <div className="hometitle">

      <div id="header1">
      <h2> Its time to stop putting off the gym and prioritize your health.</h2>
      <h2>Select a featured workout plan to get started, or create your own!</h2>
      </div>

      </div>

      <div className="homebuttons">

        <div onClick={() => navigate('/musclegroups')} id="link1">
          <h3>Create Workout</h3>
        </div>

        <div onClick={() => navigate('/myworkouts')} id="link2">
          <h3>My Workouts</h3>
        </div>

        <div onClick={() => navigate('/featured')} id="link3">
          <h3>Featured Workouts</h3>
        </div>
      </div>

    </div>
  )
}

export default Home