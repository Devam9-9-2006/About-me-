import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaGraduationCap } from "react-icons/fa";

function AdminEducation() {
  const [education, setEducation] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    degree: "",
    institute: "",
    duration: "",
    percentage: "",
    description: "",
  });

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("education")) || [];

    setEducation(data);
  }, []);

  const saveEducation = (data) => {
    localStorage.setItem("education", JSON.stringify(data));
    setEducation(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = education.map((item) =>
        item.id === editingId
          ? { id: editingId, ...form }
          : item
      );

      saveEducation(updated);
      setEditingId(null);
    } else {
      const newEducation = {
        id: Date.now(),
        ...form,
      };

      saveEducation([...education, newEducation]);
    }

    setForm({
      degree: "",
      institute: "",
      duration: "",
      percentage: "",
      description: "",
    });
  };

  const editEducation = (item) => {
    setEditingId(item.id);

    setForm({
      degree: item.degree,
      institute: item.institute,
      duration: item.duration,
      percentage: item.percentage,
      description: item.description,
    });
  };

  const deleteEducation = (id) => {
    const updated = education.filter(
      (item) => item.id !== id
    );

    saveEducation(updated);
  };

  return (
    <div className="text-white">

      {/* Heading */}

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Manage Education
        </h1>

        <div className="bg-green-600 px-6 py-3 rounded-xl">
          Total Records : {education.length}
        </div>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5 bg-slate-900 p-8 rounded-2xl"
      >

        <input
          type="text"
          placeholder="Degree"
          value={form.degree}
          onChange={(e) =>
            setForm({
              ...form,
              degree: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800"
          required
        />

        <input
          type="text"
          placeholder="Institute"
          value={form.institute}
          onChange={(e) =>
            setForm({
              ...form,
              institute: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800"
          required
        />

        <input
          type="text"
          placeholder="Duration"
          value={form.duration}
          onChange={(e) =>
            setForm({
              ...form,
              duration: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800"
          required
        />

        <input
          type="text"
          placeholder="CGPA / Percentage"
          value={form.percentage}
          onChange={(e) =>
            setForm({
              ...form,
              percentage: e.target.value,
            })
          }
          className="p-4 rounded-lg bg-slate-800"
        />

        <textarea
          rows="5"
          placeholder="Description"
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
          className="bg-green-600 hover:bg-green-700 p-4 rounded-xl md:col-span-2"
        >
          {editingId ? "Update Education" : "Add Education"}
        </button>

      </form>

      {/* Education List */}

      <div className="grid lg:grid-cols-2 gap-8 mt-12">

        {education.map((item) => (

          <div
            key={item.id}
            className="bg-slate-900 rounded-2xl p-6"
          >

            <div className="flex items-center gap-4">

              <FaGraduationCap
                size={35}
                className="text-green-400"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  {item.degree}
                </h2>

                <p className="text-green-400">
                  {item.institute}
                </p>

              </div>

            </div>

            <p className="mt-4 text-gray-400">
              {item.duration}
            </p>

            <p className="text-blue-400">
              {item.percentage}
            </p>

            <p className="mt-4 text-gray-300">
              {item.description}
            </p>

            <div className="flex gap-4 mt-6">

              <button
                onClick={() => editEducation(item)}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 py-3 rounded-lg flex justify-center items-center gap-2"
              >
                <FaEdit />
                Edit
              </button>

              <button
                onClick={() =>
                  deleteEducation(item.id)
                }
                className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg flex justify-center items-center gap-2"
              >
                <FaTrash />
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {education.length === 0 && (
        <div className="text-center text-gray-400 mt-16">
          No Education Records Found
        </div>
      )}

    </div>
  );
}

export default AdminEducation;