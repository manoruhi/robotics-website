import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="projects-section">
          <div className="projects-inner">
            <h2 className="section-title">Project not found</h2>
            <p className="section-subtitle">The project you are looking for does not exist.</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="projects-section">
        <div className="projects-inner project-detail">
          <div
            className="project-detail-image"
            style={{ backgroundImage: `url('${project.image}')` }}
          />
          <div className="project-pill-row">
            <span className="project-pill level-pill">{project.level}</span>
          </div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

