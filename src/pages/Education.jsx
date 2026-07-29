import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Education() {
  const [education, setEducation] = useState([]);

  const fetchEducation = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "education"));

      const educationList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEducation(educationList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-[#050816] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[6px] text-sm">
            My Journey
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Education
          </h1>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={fetchEducation}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Load Education
          </button>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-cyan-500 ml-6">
          {education.map((item, index) => (
            <div
              key={item.id}
              className="relative mb-12 pl-10 group"
              style={{
                animation: `fadeUp 0.6s ease ${index * 0.2}s both`,
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[15px] top-4 w-6 h-6 rounded-full bg-cyan-400 border-4 border-[#050816] group-hover:scale-125 transition duration-300"></div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
                <h2 className="text-2xl font-bold text-cyan-300">
                  {item.degree}
                </h2>

                <p className="mt-2 text-lg text-gray-300">
                  {item.institute}
                </p>

                {item.year && (
                  <p className="mt-2 text-cyan-400">
                    📅 {item.year}
                  </p>
                )}

                {item.description && (
                  <p className="mt-4 text-gray-400 leading-7">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Education;