import './Education.css'

function Education() {
return ( <section id="education" className="education">
  <div className="education-title">

    <p>ACADEMIC JOURNEY</p>

    <h1>
      My <span>Education</span>
    </h1>

  </div>

  <div className="timeline">

    <div className="edu-card">

      <span className="year">
        2022 — 2025
      </span>

      <h2>
        Diploma in Computer Engineering
      </h2>

      <h4>
        LJ Polytechnic
      </h4>

      <p>
        Built strong foundations in
        programming, web technologies,
        databases and software
        development.
      </p>

    </div>



    <div className="edu-card">

      <span className="year">
        Continuing Degree
      </span>

      <h2>
        B.Tech — AI & Data Science
      </h2>

      <h4>
        JG University
      </h4>

      <p>
        Exploring Artificial Intelligence,
        Data Science and advanced software
        engineering with practical
        development experience.
      </p>

    </div>

  </div>

</section>
)
}
export default Education