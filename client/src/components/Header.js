import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <img
        src="https://www.vhv.rs/dpng/d/116-1162001_clip-art-nwhealthy-emojis-by-chi-dumbbell-emoji.png"
        className="logo"
        alt="logo"
      ></img>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>{props.backButton && <Link to="/musclegroups">Back</Link>}</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
