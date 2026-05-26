import portrait from '../assets/1.png'

function HeroSection({ onNavigate }) {
  const handleNavigate = (event, path) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate(path)
  }

  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Architectural Designer</p>
        <h1>Param Patel</h1>
        <p className="intro">
          I design thoughtful architectural and urban spaces where research,
          narrative, and technical clarity work together. This home page can
          carry your strongest personal introduction while the project grid
          stays simple and visual.
        </p>
        <div className="hero-actions">
          <a
            className="primary-link"
            href="/projects"
            onClick={(event) => handleNavigate(event, '/projects')}
          >
            View projects
          </a>
          <a
            className="secondary-link"
            href="/contact"
            onClick={(event) => handleNavigate(event, '/contact')}
          >
            Start a conversation
          </a>
        </div>
      </div>
      <div className="portrait-wrap">
        <img src={portrait} alt="Param Patel portrait" />
      </div>
    </section>
  )
}

export default HeroSection
