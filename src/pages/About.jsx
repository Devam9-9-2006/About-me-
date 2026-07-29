import { useState } from "react";

function About() {
  const [skills] = useState(() => {
    return JSON.parse(localStorage.getItem("skills")) || [];
  });

  return (
    <section className="min-h-screen bg-[#050816] text-white py-28 px-6 md:px-12 lg:px-24">

      {/* Heading */}

      <div className="text-center">

        <p className="uppercase tracking-[8px] text-blue-400">
          About Me
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Who <span className="text-blue-400">Am I?</span>
        </h1>

      </div>

      {/* About */}

      <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

        <div>

          <h2 className="text-3xl font-bold mb-6">
            Hi, I'm Devam Panchal 👋
          </h2>

          <p className="text-gray-400 leading-8">
            I am a Computer Engineering student passionate about
            Web Development, Artificial Intelligence, and Machine
            Learning. I enjoy building responsive websites,
            dynamic web applications, and solving real-world
            problems through technology.
          </p>

          <p className="text-gray-400 leading-8 mt-6">
            I completed my Diploma in Computer Engineering from
            LJ Polytechnic and I am currently pursuing my
            Bachelor's Degree in Artificial Intelligence &
            Data Science at JG University.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-slate-900 rounded-xl p-5">
              <h3 className="text-blue-400 font-semibold">
                Location
              </h3>

              <p className="text-gray-300 mt-2">
                Ahmedabad, India
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-5">
              <h3 className="text-blue-400 font-semibold">
                Experience
              </h3>

              <p className="text-gray-300 mt-2">
                React Developer Intern
              </p>
            </div>

          </div>

        </div>

        {/* Skills */}

        <div>

          <h2 className="text-3xl font-bold mb-8">
            My Skills
          </h2>

          <div className="flex flex-wrap gap-4">

            {skills.length > 0 ? (
              skills.map((skill) => (
                <span
                  key={skill.id}
                  className="bg-blue-600 px-5 py-3 rounded-full"
                >
                  {skill.name}
                </span>
              ))
            ) : (
              <p className="text-gray-400">
                No skills added yet.
              </p>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;