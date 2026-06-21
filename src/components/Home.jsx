import './Home.css'

function Home() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <p className="tag">
          ✦ WEB DEVELOPER • REACT
        </p>

        <h1>
          Hi, I'm <span>Devam</span>
        </h1>

        <h2>
          Building Modern Experiences
        </h2>

        <p className="desc">
          B.Tech AI & DS Student creating
          futuristic websites and premium UI.
        </p>

        <div className="buttons">
          <button className="primary">
            View Projects
          </button>

          <button className="secondary">
            Explore
          </button>
        </div>

      </div>



      <div className="hero-right">

        <div className="circle"></div>

        <div className="circle small"></div>

        <div className="card">

          <h3>DEVAM</h3>

          <p>React Developer</p>

        </div>

      </div>

    </section>
  )
}

export default Home