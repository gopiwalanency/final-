function ProjectsSection({ projects, onProjectSelect }) {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Selected projects</h2>
      </div>
      <div className="project-thumb-grid">
        {projects.map((project, index) => (
          <button
            className="project-thumb-card"
            key={project.title}
            type="button"
            onClick={() => onProjectSelect(project.slug)}
          >
            <div className={`project-thumb visual-${index + 1}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>{project.title}</h3>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
