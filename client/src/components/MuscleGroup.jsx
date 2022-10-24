import { useNavigate } from "react-router-dom"

const MuscleGroup = (props) => {
  
const navigate=useNavigate()

  return(
    <div className="musclegroup">
      {props.muscleGroups.map((muscleGroup) => (
        <div key={muscleGroup._id} onClick={() => navigate(`/musclegroups/${muscleGroup.name}`)}>
          <h2>{muscleGroup.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default MuscleGroup