import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "projects")
      );

      const projectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(projectList);
    } catch (error) {
      console.error("Error loading projects:", error);
    }
  };

  return (
    <section className="min-h-screen bg-[#050816] text-white py-28 px-6 md:px-12 lg:px-24">

      {/* Heading */}

      <div className="text-center">

        <p className="text-blue-400 tracking-[8px] uppercase">
          My Work
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Featured <span className="text-blue-400">Projects</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Here are some of the projects I have developed using React,
          JavaScript, Python, Machine Learning and modern web
          technologies.
        </p>

      </div>

      {/* Projects */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

        {projects.length > 0 ? (

          projects.map((project) => (

            <div
              key={project.id}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300"
            >

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <p className="text-blue-400 mt-4 text-sm">
                  {project.tech}
                </p>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-3 rounded-xl"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="col-span-3 text-center">

            <h2 className="text-3xl font-bold text-gray-300">
              No Projects Added
            </h2>

            <p className="text-gray-500 mt-4">
              Add projects from the Admin Panel.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Project;