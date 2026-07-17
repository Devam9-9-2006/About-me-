import { useEffect, useState } from "react";
import {
  FaProjectDiagram,
  FaGraduationCap,
  FaTools,
  FaBriefcase,
} from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    education: 0,
    experience: 0,
    skills: 0,
  });

  useEffect(() => {
    const loadData = () => {
      setStats({
        projects:
          JSON.parse(localStorage.getItem("projects"))?.length || 0,

        education:
          JSON.parse(localStorage.getItem("education"))?.length || 0,

        experience:
          JSON.parse(localStorage.getItem("experience"))?.length || 0,

        skills:
          JSON.parse(localStorage.getItem("skills"))?.length || 0,
      });
    };

    loadData();

    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("storage", loadData);
    };
  }, []);

  const cards = [
    {
      title: "Projects",
      value: stats.projects,
      icon: <FaProjectDiagram size={40} />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Education",
      value: stats.education,
      icon: <FaGraduationCap size={40} />,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Experience",
      value: stats.experience,
      icon: <FaBriefcase size={40} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Skills",
      value: stats.skills,
      icon: <FaTools size={40} />,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
  ];

  return (
    <div>

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold">
            Welcome, Devam 👋
          </h1>

          <p className="text-gray-400 mt-3">
            Manage your portfolio from one place.
          </p>

        </div>

        <div className="mt-6 md:mt-0 bg-slate-900 px-6 py-4 rounded-xl">

          <p className="text-gray-400">
            Today
          </p>

          <h2 className="text-xl font-semibold">
            {new Date().toLocaleDateString()}
          </h2>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {cards.map((card) => (

          <div
            key={card.title}
            className={`${card.bg} rounded-2xl p-8 border border-slate-800 hover:scale-105 duration-300`}
          >

            <div className={`${card.color}`}>
              {card.icon}
            </div>

            <h2 className="text-gray-400 mt-6">
              {card.title}
            </h2>

            <h1 className={`text-5xl font-bold mt-3 ${card.color}`}>
              {card.value}
            </h1>

          </div>

        ))}

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-8 mt-12">

        {/* Recent Activity */}

        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-gray-300">

            <li>📁 Total Projects : {stats.projects}</li>

            <li>🎓 Education Records : {stats.education}</li>

            <li>💼 Experience Records : {stats.experience}</li>

            <li>🛠 Skills Added : {stats.skills}</li>

          </ul>

        </div>

        {/* Quick Actions */}

        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              ➕
              <p className="mt-3">
                Add Project
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              🎓
              <p className="mt-3">
                Add Education
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              💼
              <p className="mt-3">
                Add Experience
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              🛠
              <p className="mt-3">
                Add Skills
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;