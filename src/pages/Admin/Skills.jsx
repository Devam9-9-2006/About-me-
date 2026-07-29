import { useState } from "react";
import { FaEdit, FaTrash, FaTools } from "react-icons/fa";

import { db } from "../../firebase";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    level: "",
  });

  const fetchSkills = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "skills"));

      const skillList = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setSkills(skillList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.category || !form.level) {
      alert("Please fill all fields.");
      return;
    }

    try {
      if (editingId) {
        await updateDoc(doc(db, "skills", editingId), {
          name: form.name,
          category: form.category,
          level: form.level,
        });

        setEditingId(null);
      } else {
        await addDoc(collection(db, "skills"), {
          name: form.name,
          category: form.category,
          level: form.level,
        });
      }

      setForm({
        name: "",
        category: "",
        level: "",
      });

      fetchSkills();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  const editSkill = (skill) => {
    setEditingId(skill.id);

    setForm({
      name: skill.name,
      category: skill.category,
      level: skill.level,
    });
  };

  const deleteSkill = async (id) => {
    if (!window.confirm("Delete this skill?")) return;

    try {
      await deleteDoc(doc(db, "skills", id));
      fetchSkills();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">
          Manage Skills
        </h1>

        <div className="flex gap-4">
          <button
            onClick={fetchSkills}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
          >
            Load Skills
          </button>

          <div className="bg-pink-600 px-6 py-3 rounded-xl font-semibold">
            Total Skills : {skills.length}
          </div>
        </div>
      </div>

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
          required
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
          required
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
          required
        />

        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 rounded-xl py-4 font-semibold md:col-span-2"
        >
          {editingId ? "Update Skill" : "Add Skill"}
        </button>
      </form>

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