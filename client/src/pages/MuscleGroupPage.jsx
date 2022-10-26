import MuscleGroup from '../components/MuscleGroup'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MuscleGroupPage = (props) => {

  const navigate = useNavigate()
  const { id } = useParams()
  
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
    if (!props.update) {
      let response = await axios.post(
        'http://localhost:3001/myworkouts',
        props.formState
      )
      props.setFormState(props.initialState)
      navigate('/myworkouts')
    } else {
      let response = await axios.put(`http://localhost:3001/myworkouts/${id}`, props.formState)
      props.setFormState(props.initialState)
    }
  }

  return(
    <div className='musclegrouppage'>
      <div className='nameworkout'>
        <h1 id='name'>Name your workout:</h1>
          <input
          placeholder='Enter workout name'
          onChange={handleChange}
          id="name"
          type="text"
          value={props.formState.name}
          />
      </div>

      <h1>Select your muscle group:</h1>
      <MuscleGroup muscleGroups={muscleGroups} 
      getMuscleGroups={getMuscleGroups}
      />
      <div className='submit'>
        <button onClick={handleSubmit}type="submit">Save Workout</button>
      </div>
    </div>
  )
}

export default MuscleGroupPage