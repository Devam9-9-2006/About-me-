import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";

// Portfolio Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

// Admin Pages
import Login from "./pages/Admin/Login";
import DashboardLayout from "./pages/Admin/DashboardLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AdminProject from "./pages/Admin/AdminProject";
import AdminEducation from "./pages/Admin/Education";
import AdminExperience from "./pages/Admin/Experience";
import AdminSkills from "./pages/Admin/Skills";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login";

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {!hideNavbar && <Navbar />}

      <div className={!hideNavbar ? "pt-24" : ""}>
        <Routes>

          {/* Portfolio */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          {/* Login */}

          <Route path="/login" element={<Login />} />

          {/* Admin */}

          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />

            <Route
              path="dashboard"
              element={<Dashboard />}
            />

            <Route
              path="projects"
              element={<AdminProject />}
            />

            <Route
              path="education"
              element={<AdminEducation />}
            />

            <Route
              path="experience"
              element={<AdminExperience />}
            />

            <Route
              path="skills"
              element={<AdminSkills />}
            />
          </Route>

        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
