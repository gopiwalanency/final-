import portrait from '../assets/1.png'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src={portrait} alt="Professional portrait of Param Patel" />
      </div>
      <div className="about-copy">
        <p className="section-label">About</p>
        <h2>Creating useful, memorable environments with a human point of view.</h2>
        <p>
          This is dummy content. You can share your real story, education,
          experience, services, and location, and I will replace this text with
          your actual profile.
        </p>
        <dl className="about-facts">
          <div>
            <dt>Base</dt>
            <dd>Your City</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Places, interiors, strategy</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Available for new projects</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default AboutSection
