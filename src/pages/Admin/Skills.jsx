import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaTools } from "react-icons/fa";

function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    level: "",
  });

  // Load skills
  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("skills")) || [];

    setSkills(data);
  }, []);

  // Save skills
  const saveSkills = (data) => {
    localStorage.setItem("skills", JSON.stringify(data));
    setSkills(data);
  };

  // Add / Update Skill
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.category ||
      !form.level
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editingId) {
      const updated = skills.map((skill) =>
        skill.id === editingId
          ? { id: editingId, ...form }
          : skill
      );

      saveSkills(updated);
      setEditingId(null);
    } else {
      const newSkill = {
        id: Date.now(),
        ...form,
      };

      saveSkills([...skills, newSkill]);
    }

    setForm({
      name: "",
      category: "",
      level: "",
    });
  };

  // Edit Skill
  const editSkill = (skill) => {
    setEditingId(skill.id);

    setForm({
      name: skill.name,
      category: skill.category,
      level: skill.level,
    });
  };

  // Delete Skill
  const deleteSkill = (id) => {
    if (!window.confirm("Delete this skill?")) return;

    const updated = skills.filter(
      (skill) => skill.id !== id
    );

    saveSkills(updated);
  };

  return (
    <div className="text-white">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Manage Skills
        </h1>

        <div className="bg-pink-600 px-6 py-3 rounded-xl font-semibold">
          Total Skills : {skills.length}
        </div>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 rounded-2xl p-8 grid md:grid-cols-2 gap-5"
      >

        <input
          type="text"
          placeholder="Skill Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="bg-slate-800 p-4 rounded-lg outline-none"
        />

        <input
          type="text"
          placeholder="Category (Frontend, Backend...)"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
          className="bg-slate-800 p-4 rounded-lg outline-none"
        />

        <input
          type="number"
          placeholder="Skill Level (%)"
          min="0"
          max="100"
          value={form.level}
          onChange={(e) =>
            setForm({
              ...form,
              level: e.target.value,
            })
          }
          className="bg-slate-800 p-4 rounded-lg outline-none md:col-span-2"
        />

        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 rounded-xl py-4 font-semibold md:col-span-2"
        >
          {editingId ? "Update Skill" : "Add Skill"}
        </button>

      </form>

      {/* Skills List */}

      <div className="grid lg:grid-cols-2 gap-8 mt-12">

        {skills.map((skill) => (

          <div
            key={skill.id}
            className="bg-slate-900 rounded-2xl p-6"
          >

            <div className="flex items-center gap-4">

              <FaTools
                size={35}
                className="text-pink-400"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  {skill.name}
                </h2>

                <p className="text-gray-400">
                  {skill.category}
                </p>

              </div>

            </div>

            <div className="mt-6">

              <div className="flex justify-between mb-2">

                <span>Skill Level</span>

                <span>{skill.level}%</span>

              </div>

              <div className="bg-slate-700 rounded-full h-3">

                <div
                  className="bg-pink-500 h-3 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                  }}
                ></div>

              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => editSkill(skill)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-lg py-3 flex items-center justify-center gap-2"
              >
                <FaEdit />
                Edit
              </button>

              <button
                onClick={() => deleteSkill(skill.id)}
                className="flex-1 bg-red-600 hover:bg-red-700 rounded-lg py-3 flex items-center justify-center gap-2"
              >
                <FaTrash />
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {skills.length === 0 && (
        <div className="text-center text-gray-500 mt-16">
          No Skills Added Yet
        </div>
      )}

    </div>
  );
}

export default AdminSkills;