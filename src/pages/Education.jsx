import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "education")
      );

      const educationList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEducation(educationList);
    } catch (error) {
      console.error("Error loading education:", error);
    }
  };

  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-10 lg:px-24 py-32">

      {/* Heading */}

      <div className="text-center">

        <p className="text-blue-400 tracking-[6px] text-sm uppercase">
          Academic Journey
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-5">
          My <span className="text-blue-400">Education</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          My academic journey that helped me build a strong foundation
          in programming, software development, Artificial Intelligence,
          and Data Science.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative mt-20">

        <div className="hidden xl:block absolute left-1/2 top-0 w-[2px] h-full bg-blue-500/20"></div>

        <div className="space-y-12">

          {education.length > 0 ? (

            education.map((item, index) => (

              <div
                key={item.id}
                className={`
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  md:p-10
                  xl:w-[46%]
                  hover:-translate-y-2
                  duration-300
                  ${
                    index % 2 === 0
                      ? ""
                      : "xl:ml-auto"
                  }
                `}
              >

                <p className="text-blue-400">
                  {item.duration}
                </p>

                <h2 className="text-3xl md:text-4xl mt-5 font-bold">
                  {item.degree}
                </h2>

                <h4 className="mt-4 text-gray-300">
                  {item.institute}
                </h4>

                <p className="mt-3 text-green-400">
                  {item.percentage}
                </p>

                <p className="mt-8 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>

            ))

          ) : (

            <div className="text-center mt-20">

              <h2 className="text-3xl font-bold text-gray-300">
                No Education Added
              </h2>

              <p className="text-gray-500 mt-4">
                Add education records from the Admin Panel.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Education;