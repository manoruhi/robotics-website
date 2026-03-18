import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getCourseBySlug } from '../data/courses'
import './CourseDetailPage.css'

export default function CourseDetailPage() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="course-detail">
          <div className="course-detail-inner">
            <p>Course not found.</p>
            <Link to="/courses" className="course-detail-back">← Back to Courses</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="course-detail">
        <div className="course-detail-inner">
          <Link to="/courses" className="course-detail-back">← Back to Courses</Link>
          <div
            className="course-detail-hero"
            style={{ backgroundImage: `url('${course.image}')` }}
          />
          <div className="course-detail-content">
            <h1 className="course-detail-title">{course.title}</h1>
            <div className="course-detail-meta">
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>
            <p className="course-detail-desc">{course.description}</p>
            <h2 className="course-detail-heading">What you'll learn</h2>
            <ul className="course-detail-topics">
              {course.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <div className="course-detail-cta">
              <button type="button" className="btn-enroll">Enroll Now</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
