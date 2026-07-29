import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Experience() {
  const [experience, setExperience] = useState([]);

  const fetchExperience = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "experience"));

      const experienceList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setExperience(experienceList);
    } catch (error) {
      console.error("Error loading experience:", error);
    }
  };

  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-10 lg:px-24 py-32">

      <div className="text-center">
        <p className="text-blue-400 tracking-[6px] text-sm uppercase">
          My Experience
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-5">
          Experience <span className="text-blue-400">& Internship</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          My professional journey, internships, and practical experience
          that helped me improve my development skills.
        </p>

        <button
          onClick={fetchExperience}
          className="mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
        >
          Load Experience
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-20">
        {experience.length > 0 ? (
          experience.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:-translate-y-2 duration-300"
            >
              <div className="text-5xl">💼</div>

              <h2 className="text-3xl font-bold mt-6">
                {item.role}
              </h2>

              <h4 className="text-blue-400 mt-4">
                {item.company}
              </h4>

              <p className="text-green-400 mt-2">
                {item.duration}
              </p>

              <p className="text-gray-400 mt-2">
                {item.location}
              </p>

              <p className="leading-8 text-gray-400 mt-8">
                {item.description}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center">
            <h2 className="text-3xl font-bold text-gray-300">
              No Experience Added
            </h2>

            <p className="text-gray-500 mt-4">
              Click "Load Experience" to fetch your data.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;