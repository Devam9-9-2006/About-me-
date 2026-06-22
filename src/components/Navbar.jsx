import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
return ( <nav className="navbar">
  <h2 className="logo">
    DEVAM
  </h2>

  <ul className="nav-links">

    <li>
      <Link to="/">
        Home
      </Link>
    </li>

    <li>
      <Link to="/about">
        About Me
      </Link>
    </li>

    <li>
      <Link to="/education">
        Education
      </Link>
    </li>

    <li>
      <Link to="/experience">
        Experience
      </Link>
    </li>

    <li>
      <Link to="/projects">
        Projects
      </Link>
    </li>

  </ul>

</nav>


)
}

export default Navbar
