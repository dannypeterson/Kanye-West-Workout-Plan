import MuscleGroup from '../components/MuscleGroup'
import axios from 'axios'
import { useEffect, useState } from 'react'


const MuscleGroupPage = (props) => {
  
//useState to change state of muscle group
const [muscleGroups, setMuscleGroups] = useState([])

//axios call to get workout information
const getMuscleGroups = async () => {
  const response = await axios.get('http://localhost:3001/musclegroups')
  setMuscleGroups(response.data)
}

//useEffect to get axios call on page render
useEffect(() => {
getMuscleGroups()

},[])

  return(
    <div>
      <h1>Select your muscle group</h1>
      <MuscleGroup muscleGroups={muscleGroups} getMuscleGroups={getMuscleGroups}/>
    </div>
  )
}

export default MuscleGroupPage