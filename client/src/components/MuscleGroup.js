import { useNavigate } from 'react-router-dom'

const MuscleGroup = (props) => {
  const navigate = useNavigate()

  return (
    <div className="allgroups">
      {props.muscleGroups.map((muscleGroup) => (
        <div
          className="musclegroup"
          key={muscleGroup._id}
          onClick={() => navigate(`/musclegroups/${muscleGroup._id}`)}
        >
          <h2>{muscleGroup.name}</h2>
          <img className="groupimg" src={muscleGroup.img} alt="poster"></img>
        </div>
      ))}
    </div>
  )
}

export default MuscleGroup
