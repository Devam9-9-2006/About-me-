import { useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaProjectDiagram,
  FaSignOutAlt,
  FaTools,
} from "react-icons/fa";

import {
  MdDashboard,
  MdSchool,
  MdWork,
} from "react-icons/md";

function DashboardLayout() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdDashboard size={22} />,
  },
  {
    title: "Projects",
    path: "/admin/projects",
    icon: <FaProjectDiagram size={22} />,
  },
  {
    title: "Education",
    path: "/admin/education",
    icon: <MdSchool size={22} />,
  },
  {
    title: "Experience",
    path: "/admin/experience",
    icon: <MdWork size={22} />,
  },
  {
    title: "Skills",
    path: "/admin/skills",
    icon: <FaTools size={22} />,
  },
];

  const logout = () => {
  localStorage.removeItem("isAdmin");
  navigate("/");
};

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          bg-slate-900
          border-r
          border-slate-800
          transition-all
          duration-300
          z-40
          ${sidebarOpen ? "w-72" : "w-0"}
          overflow-hidden
        `}
      >

        <div className="p-6">

          {/* Toggle Button */}

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-slate-800 hover:bg-slate-700 p-3 rounded-xl border border-slate-700"
          >
            {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <h1 className="text-4xl font-bold text-blue-400 mt-10">
            Admin
          </h1>

          <p className="text-gray-400 mt-2">
            Portfolio Dashboard
          </p>

          <div className="mt-10 space-y-4">

            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={handleMenuClick}
                className={({ isActive }) =>
                  `
                    flex
                    items-center
                    gap-4
                    px-5
                    py-4
                    rounded-xl
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-blue-600"
                        : "bg-slate-800 hover:bg-slate-700"
                    }
                  `
                }
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            ))}

            <button
              onClick={logout}
              className="
                w-full
                mt-10
                flex
                items-center
                justify-center
                gap-3
                bg-red-600
                hover:bg-red-700
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
              "
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

      </aside>

      {/* Hamburger Button when Sidebar is Closed */}

      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            fixed
            top-5
            left-5
            z-50
            bg-slate-900
            border
            border-slate-700
            p-3
            rounded-xl
            hover:bg-slate-800
          "
        >
          <FaBars size={20} />
        </button>
      )}

      {/* Main Content */}

      <main
        className={`
          transition-all
          duration-300
          min-h-screen
          p-8
          ${sidebarOpen ? "md:ml-72" : "ml-0"}
        `}
      >
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;