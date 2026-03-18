import './projects.css'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects({ limit, showViewAll }) {
  const list = limit ? projects.slice(0, limit) : projects
  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
        We develop and showcase innovative robotics projects that integrate electronics, embedded systems, artificial intelligence, and automation technologies. Our projects range from educational STEM models to advanced IoT-enabled and AI-powered robotic systems, helping students and professionals gain practical exposure to real-time engineering applications.
        </p>

        <div className="projects-grid">
          {list.map((project) => (
            <article key={project.title} className="project-card">
              <Link to={`/projects/${project.slug}`} className="project-card-link">
                {project.image && (
                  <div
                    className="project-card-image"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                )}
                <div className="project-pill-row">
                  <span className="project-pill level-pill">{project.level}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button type="button" className="project-cta">
                  View Project
                </button>
              </Link>
            </article>
          ))}
        </div>
        {showViewAll && (
          <div className="projects-cta">
            <Link to="/projects" className="btn-outline-projects">
              View all projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

