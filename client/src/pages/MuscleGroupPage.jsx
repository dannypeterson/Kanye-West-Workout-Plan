import MuscleGroup from '../components/MuscleGroup'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MuscleGroupPage = (props) => {

  const navigate = useNavigate()
  
//useState to change state of muscle group
const [muscleGroups, setMuscleGroups] = useState([])

//axios call to get muscle groups, mapped in MuscleGroup component
const getMuscleGroups = async () => {
  const response = await axios.get('http://localhost:3001/musclegroups')
  setMuscleGroups(response.data)
}

//useEffect to get axios call on page render
useEffect(() => {
getMuscleGroups()

},[])


//save state of name form
const handleChange = (event) => {
  props.setFormState({...props.formState, [event.target.id]: event.target.value})
  console.log(props.formState)
}

  //post workout to myWorkouts model
  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post(
      'http://localhost:3001/myworkouts',
      props.formState
    )
    props.setFormState(props.initialState)
    navigate('/myworkouts')
  }

  return(
    <div>
      <h1>Name your workout:</h1>
      
    <input 
    onChange={handleChange}
    id="name"
    type="text"
    value={props.formState.name}
    />

      <h1>Select your muscle group:</h1>
      <MuscleGroup muscleGroups={muscleGroups} 
      getMuscleGroups={getMuscleGroups}
      />

      <button onClick={handleSubmit}type="submit">Save Workout</button>
    </div>
  )
}

export default MuscleGroupPage