import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "skills"));

      const skillList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSkills(skillList);
    } catch (error) {
      console.error("Error loading skills:", error);
    }
  };

  // Group Skills by Category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }

    acc[skill.category].push(skill);

    return acc;
  }, {});

  return (
    <section className="min-h-screen bg-[#050816] text-white py-28 px-6 md:px-12 lg:px-24">
      {/* Heading */}

      <div className="text-center">
        <p className="uppercase tracking-[8px] text-blue-400">
          MY SKILLS
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Technical <span className="text-blue-400">Skills</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          These are the technologies and tools that I use while
          building responsive, scalable and modern web applications.
        </p>
      </div>

      {/* Skills Section */}

      {skills.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">
            No Skills Added
          </h2>

          <p className="text-gray-500 mt-4">
            Please add skills from the Admin Dashboard.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
          {Object.entries(groupedSkills).map(
            ([category, skillList]) => (
              <div
                key={category}
                className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 duration-300"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-8">
                  {category}
                </h2>

                {skillList.map((skill) => (
                  <div key={skill.id} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>

                      <span>{skill.level}%</span>
                    </div>

                    <div className="bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-blue-500 rounded-full h-3 duration-500"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      )}

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-8 mt-24">
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <h1 className="text-5xl font-bold text-blue-400">
            {skills.length}
          </h1>

          <p className="mt-3 text-gray-400">
            Total Skills
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <h1 className="text-5xl font-bold text-green-400">
            {Object.keys(groupedSkills).length}
          </h1>

          <p className="mt-3 text-gray-400">
            Categories
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <h1 className="text-5xl font-bold text-pink-400">
            {Math.max(
              ...skills.map((item) => Number(item.level)),
              0
            )}
            %
          </h1>

          <p className="mt-3 text-gray-400">
            Highest Skill
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <h1 className="text-5xl font-bold text-yellow-400">
            100%
          </h1>

          <p className="mt-3 text-gray-400">
            Passion
          </p>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-24 text-center">
        <h2 className="text-4xl font-bold">
          Always Learning 🚀
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          I continuously learn modern technologies, build real-world
          projects, and improve my problem-solving skills to become a
          better Full Stack Developer and AI Engineer.
        </p>
      </div>
    </section>
  );
}

export default Skills;