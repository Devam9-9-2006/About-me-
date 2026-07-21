import { useEffect, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { db } from "../../firebase";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function AdminProject() {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    image: "",
    github: "",
    live: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));

      const projectList = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setProjects(projectList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateDoc(doc(db, "projects", editingId), {
          title: form.title,
          description: form.description,
          tech: form.tech,
          image: form.image,
          github: form.github,
          live: form.live,
        });

        setEditingId(null);
      } else {
        await addDoc(collection(db, "projects"), {
          title: form.title,
          description: form.description,
          tech: form.tech,
          image: form.image,
          github: form.github,
          live: form.live,
        });
      }

      setForm({
        title: "",
        description: "",
        tech: "",
        image: "",
        github: "",
        live: "",
      });

      fetchProjects();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  const editProject = (project) => {
    setEditingId(project.id);

    setForm({
      title: project.title,
      description: project.description,
      tech: project.tech,
      image: project.image,
      github: project.github,
      live: project.live,
    });
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-white">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Manage Projects
        </h1>

        <div className="bg-blue-600 px-6 py-3 rounded-xl">
          Total Projects : {projects.length}
        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5 bg-slate-900 p-8 rounded-2xl"
      >

        <input
          type="text"
          placeholder="Project Title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800"
          required
        />

        <input
          type="text"
          placeholder="Technology Used"
          value={form.tech}
          onChange={(e) =>
            setForm({
              ...form,
              tech: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) =>
            setForm({
              ...form,
              image: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800"
        />

        <input
          type="text"
          placeholder="GitHub Link"
          value={form.github}
          onChange={(e) =>
            setForm({
              ...form,
              github: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800"
        />

        <input
          type="text"
          placeholder="Live Demo Link"
          value={form.live}
          onChange={(e) =>
            setForm({
              ...form,
              live: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800 md:col-span-2"
        />

        <textarea
          rows="5"
          placeholder="Project Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800 md:col-span-2"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-4 rounded-xl md:col-span-2"
        >
          {editingId ? "Update Project" : "Add Project"}
        </button>

      </form>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-slate-900 rounded-2xl overflow-hidden"
          >

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
            )}

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {project.title}
              </h2>

              <p className="text-blue-400 mt-2">
                {project.tech}
              </p>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>

              <div className="flex gap-3 mt-6">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-slate-800 hover:bg-slate-700 rounded-lg py-3 flex justify-center items-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-lg py-3 flex justify-center items-center gap-2"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>

              </div>

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() => editProject(project)}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 rounded-lg py-3 flex justify-center items-center gap-2"
                >
                  <FaEdit />
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(project.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 rounded-lg py-3 flex justify-center items-center gap-2"
                >
                  <FaTrash />
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {projects.length === 0 && (
        <div className="text-center text-gray-400 mt-16">
          No Projects Added Yet
        </div>
      )}

    </div>
  );
}

export default AdminProject;