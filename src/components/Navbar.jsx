import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-24 py-5 flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold tracking-widest text-blue-400 hover:text-blue-300 duration-300"
        >
          DEVAM
        </Link>

        {/* Navigation */}

        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm md:text-lg font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400 duration-300"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400 duration-300"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400 duration-300"
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400 duration-300"
              }
            >
              Education
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400 duration-300"
              }
            >
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400 duration-300"
              }
            >
              Projects
            </NavLink>
          </li>

    
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400 duration-300"
              }
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full duration-300 ${
                  isActive
                    ? "bg-blue-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;