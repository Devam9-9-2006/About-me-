import './About.css'

function About() {
  return (
    <section id="about" className="about">

      <div className="about-left">

        <div className="profile-circle">
          D
        </div>

      </div>


      <div className="about-right">

        <p className="title">
          ABOUT ME
        </p>

        <h1>
          Turning Ideas Into
          <span> Modern Experiences</span>
        </h1>

        <p className="desc">
     

Hello, I'm Devam — a passionate
B.Tech student specializing in Artificial
Intelligence & Data Science with a strong
interest in modern web development and UI
engineering.

I enjoy transforming ideas into premium,
interactive and user-focused digital
experiences.

My journey started with front-end
development and expanded into React,
JavaScript and intelligent technologies.

I continuously learn, build projects and
experiment with creative interfaces that
combine performance and aesthetics.

My goal is to become a developer capable of
building impactful applications and solving
real-world problems through technology..
        </p>

        <div className="cards">

          <div className="card">
            <h3>Education</h3>
            <p>B.Tech AI & DS</p>
          </div>

          <div className="card">
            <h3>Experience</h3>
            <p>Web Development</p>
          </div>

          <div className="card">
            <h3>Projects</h3>
            <p>Portfolio & React Apps</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About