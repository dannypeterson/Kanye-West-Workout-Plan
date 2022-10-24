import { useState, useEffect } from "react"
import axios from "axios"

const Exercise = (props) => {


  return(
    <div className="exercises">
      {props.exercises.map((exercise) => (
        <div key={exercise._id}>
          {exercise.exercises}
        </div>
      ))}
    </div>
  )
}

export default Exercise