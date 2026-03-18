import { Link } from 'react-router-dom'
import './courses.css'

const courses = [
  {
    image: 'images/Robotics.webp',
    title: 'Introduction to Robotics',
    text: 'Learn the basics of robotics, from motors to sensors.',
  },
  {
    image: 'images/Robot.webp',
    title: 'Electronics Fundamentals',
    text: 'Circuits, components, and breadboarding.',
  },
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
    title: 'Coding for Makers',
    text: 'Program your projects with Arduino & Python.',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
    title: 'Advanced Robotics Lab',
    text: 'Work on complex robots, sensors, and real-world projects.',
  },
]

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="courses-inner">
        <h2 className="section-title">Courses</h2>
        <p className="section-subtitle">Expert-led courses to master robotics, electronics, and coding.</p>
        <div className="courses-grid">
          {courses.map((course) => (
            <article key={course.title} className="course-card">
              <div className="course-card-image" style={{ backgroundImage: `url('${course.image}')` }} />
              <div className="course-card-content">
                <h3>{course.title}</h3>
                <p>{course.text}</p>
                <Link to="/courses" className="btn btn-primary">Enroll Now</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="courses-cta">
          <Link to="/courses" className="btn btn-outline-courses">View all courses</Link>
        </div>
      </div>
    </section>
  )
}
