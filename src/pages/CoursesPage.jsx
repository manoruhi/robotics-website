import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { courses } from '../data/courses'
import './CoursesPage.css'

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="courses-page">
        <div className="courses-page-inner">
          <h1 className="courses-page-title">Our Courses</h1>
          <p className="courses-page-subtitle">
            Choose a course to learn robotics, programming, and maker skills.
          </p>
          <div className="courses-page-grid">
            {courses.map((course) => (
              <Link
                key={course.slug}
                to={`/courses/${course.slug}`}
                className="courses-page-card"
              >
                <div
                  className="courses-page-card-image"
                  style={{ backgroundImage: `url('${course.image}')` }}
                />
                <div className="courses-page-card-content">
                  <h2>{course.title}</h2>
                  <p>{course.shortDesc}</p>
                  <span className="courses-page-meta">
                    {course.duration} · {course.level}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
