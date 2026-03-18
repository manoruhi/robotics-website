import { useState, useEffect } from 'react'
import './slider.css'

const SLIDE_INTERVAL = 6000

const slides = [
  {
    bg: '/images/front.jpeg',
    title: 'Changing the way of learning',
    subtitle: 'Explore STEM education that inspires innovation and builds tomorrow\'s creators.',
  },
  {
    bg: '/images/front-1.jpeg',
    title: 'Hands-On Robotics & Electronics',
    subtitle: 'From automatic street lights to smart projects — learn by building.',
  },
  {
    bg: '/images/slide.jpeg',
    title: 'Learn. Build. Innovate.',
    subtitle: 'Join a community where curiosity meets creation.',
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <main className="hero-slider" id="home">
      {slides.map((slide, i) => (
        <section
          key={i}
          className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
        >
          <div className="slide-bg" style={{ backgroundImage: `url('${slide.bg}')` }} />
          <div className="slide-overlay" />
          <div className="slide-content">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-subtitle">{slide.subtitle}</p>
          </div>
        </section>
      ))}
    </main>
  )
}
