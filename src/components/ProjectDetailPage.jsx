function ProjectDetailPage({ project, onBack }) {
  if (!project) {
    return (
      <section className="project-detail-page">
        <button className="back-link" type="button" onClick={onBack}>
          Back to projects
        </button>
        <h1>Project not found</h1>
      </section>
    )
  }

  return (
    <section className="project-detail-page">
      <button className="back-link" type="button" onClick={onBack}>
        Back to projects
      </button>

      <div className="project-detail-hero">
        <div>
          <p className="section-label">{project.category}</p>
          <h1>{project.title}</h1>
        </div>
        <strong>{project.year}</strong>
      </div>

      <div className="project-detail-layout">
        <div className="project-detail-visual"></div>
        <div className="project-detail-copy">
          <p className="lead-text">{project.summary}</p>
          <p>{project.details}</p>
          <ul>
            {project.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailPage
