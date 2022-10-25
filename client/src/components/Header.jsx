import { Link } from 'react-router-dom'

const Header = () => {


  return(
    <header>
      <nav>
        <Link to='/musclegroups'>Back</Link>
        <Link to='/newexercise'>Edit Exercises</Link>
      </nav>
    </header>
  )
}

export default Header