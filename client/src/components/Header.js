import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate()

  return (
    <header>
      <img
        // src="https://www.vhv.rs/dpng/d/116-1162001_clip-art-nwhealthy-emojis-by-chi-dumbbell-emoji.png"
        src="../../assets/images/lifter.png"
        className="logo"
        alt="logo"
      ></img>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <p onClick={() => navigate(-1)}>Back</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
