import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Skills() {
  const [skills, setSkills] = useState([]);

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

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }

    acc[skill.category].push(skill);

    return acc;
  }, {});

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050816] via-[#0b1120] to-[#050816] text-white py-24 px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-cyan-400 text-sm">
            MY SKILLS
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skills
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I enjoy building responsive, scalable and modern web applications
            using the latest technologies and best development practices.
          </p>

          <button
            onClick={fetchSkills}
            className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
          >
            Load Skills
          </button>

        </div>

        {/* Empty State */}
        {skills.length === 0 ? (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold">
              No Skills Loaded
            </h2>

            <p className="text-gray-500 mt-4">
              Click the button above to display your skills.
            </p>

          </div>

        ) : (

          <>
            {/* Skill Cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

              {Object.entries(groupedSkills).map(([category, skillList]) => (

                <div
                  key={category}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300"
                >

                  <h2 className="text-2xl font-bold text-cyan-400 mb-8">
                    {category}
                  </h2>

                  {skillList.map((skill) => (

                    <div key={skill.id} className="mb-7">

                      <div className="flex justify-between mb-2">

                        <span className="font-medium">
                          {skill.name}
                        </span>

                        <span className="text-cyan-300">
                          {skill.level}%
                        </span>

                      </div>

                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        ></div>

                      </div>

                    </div>

                  ))}

                </div>

              ))}

            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10 hover:border-cyan-400 transition">

                <h2 className="text-5xl font-bold text-cyan-400">
                  {skills.length}
                </h2>

                <p className="text-gray-400 mt-3">
                  Total Skills
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10 hover:border-green-400 transition">

                <h2 className="text-5xl font-bold text-green-400">
                  {Object.keys(groupedSkills).length}
                </h2>

                <p className="text-gray-400 mt-3">
                  Categories
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10 hover:border-pink-400 transition">

                <h2 className="text-5xl font-bold text-pink-400">
                  {Math.max(...skills.map((item) => Number(item.level)), 0)}%
                </h2>

                <p className="text-gray-400 mt-3">
                  Highest Skill
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10 hover:border-yellow-400 transition">

                <h2 className="text-5xl font-bold text-yellow-400">
                  ∞
                </h2>

                <p className="text-gray-400 mt-3">
                  Always Learning
                </p>

              </div>

            </div>

          </>
        )}

        {/* Footer */}
        <div className="text-center mt-24">

          <h2 className="text-4xl font-bold">
            Never Stop Learning 🚀
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Technology evolves every day. I continuously improve my knowledge,
            build real-world projects, and explore new tools to become a better
            Full Stack Developer and AI Engineer.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Skills;