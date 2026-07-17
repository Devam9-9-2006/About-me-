import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaBriefcase } from "react-icons/fa";

function AdminExperience() {
  const [experience, setExperience] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    company: "",
    role: "",
    duration: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("experience")) || [];

    setExperience(data);
  }, []);

  const saveExperience = (data) => {
    localStorage.setItem("experience", JSON.stringify(data));
    setExperience(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = experience.map((item) =>
        item.id === editingId
          ? { id: editingId, ...form }
          : item
      );

      saveExperience(updated);
      setEditingId(null);
    } else {
      const newExperience = {
        id: Date.now(),
        ...form,
      };

      saveExperience([...experience, newExperience]);
    }

    setForm({
      company: "",
      role: "",
      duration: "",
      location: "",
      description: "",
    });
  };

  const editExperience = (item) => {
    setEditingId(item.id);

    setForm({
      company: item.company,
      role: item.role,
      duration: item.duration,
      location: item.location,
      description: item.description,
    });
  };

  const deleteExperience = (id) => {
    const updated = experience.filter(
      (item) => item.id !== id
    );

    saveExperience(updated);
  };

  return (
    <div className="text-white">

      {/* Heading */}

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Manage Experience
        </h1>

        <div className="bg-yellow-600 px-6 py-3 rounded-xl">
          Total Experience : {experience.length}
        </div>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5 bg-slate-900 p-8 rounded-2xl"
      >

        <input
          type="text"
          placeholder="Company Name"
          value={form.company}
          onChange={(e) =>
            setForm({ ...form, company: e.target.value })
          }
          className="p-4 rounded-lg bg-slate-800"
          required
        />

        <input
          type="text"
          placeholder="Job Role"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
          className="p-4 rounded-lg bg-slate-800"
          required
        />

        <input
          type="text"
          placeholder="Duration"
          value={form.duration}
          onChange={(e) =>
            setForm({ ...form, duration: e.target.value })
          }
          className="p-4 rounded-lg bg-slate-800"
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
          className="p-4 rounded-lg bg-slate-800"
        />

        <textarea
          rows="5"
          placeholder="Work Description"
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
          className="bg-yellow-600 hover:bg-yellow-700 p-4 rounded-xl md:col-span-2"
        >
          {editingId ? "Update Experience" : "Add Experience"}
        </button>

      </form>

      {/* Experience List */}

      <div className="grid lg:grid-cols-2 gap-8 mt-12">

        {experience.map((item) => (

          <div
            key={item.id}
            className="bg-slate-900 rounded-2xl p-6"
          >

            <div className="flex items-center gap-4">

              <FaBriefcase
                size={35}
                className="text-yellow-400"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  {item.role}
                </h2>

                <p className="text-yellow-400">
                  {item.company}
                </p>

              </div>

            </div>

            <p className="mt-4 text-gray-400">
              {item.duration}
            </p>

            <p className="text-blue-400">
              {item.location}
            </p>

            <p className="mt-4 text-gray-300">
              {item.description}
            </p>

            <div className="flex gap-4 mt-6">

              <button
                onClick={() => editExperience(item)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg flex justify-center items-center gap-2"
              >
                <FaEdit />
                Edit
              </button>

              <button
                onClick={() => deleteExperience(item.id)}
                className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg flex justify-center items-center gap-2"
              >
                <FaTrash />
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {experience.length === 0 && (
        <div className="text-center text-gray-400 mt-16">
          No Experience Added Yet
        </div>
      )}

    </div>
  );
}

export default AdminExperience;