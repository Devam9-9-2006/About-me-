import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        DEVAM
      </h2>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About Me</a>
        </li>

        <li>
          <a href="#education">Education</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar