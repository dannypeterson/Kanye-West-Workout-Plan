

const MuscleGroup = (props) => {
  
  return(
    <div className="musclegroup">
      {props.muscleGroups.map((muscleGroup) => (
        <div key={muscleGroup._id}>
          <h2>{muscleGroup.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default MuscleGroup