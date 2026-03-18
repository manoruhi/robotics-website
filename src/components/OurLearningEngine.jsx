import './our-learning-engine.css'

const cards = [
  { icon: '📚', title: 'Structured Curriculum', text: 'Step-by-step lessons that build skills from basics to advanced projects.' },
  { icon: '🔬', title: 'Hands-On Projects', text: 'Learn by doing with real kits and experiments you can build at home.' },
  { icon: '🎯', title: 'Track Progress', text: 'Monitor your growth with clear milestones and achievements.' },
  { icon: '🌐', title: 'Community Support', text: 'Connect with learners and experts in our STEM community.' },
]

export default function OurLearningEngine() {
  return (
    <section className="learning-engine" id="learning-engine">
      <div className="learning-engine-inner">
        <h2 className="section-title">Our Learning Engine</h2>
        <p className="section-subtitle">
          A powerful platform designed to make STEM education engaging, hands-on, and effective.
        </p>
        <div className="learning-engine-grid">
          {cards.map((card) => (
            <div key={card.title} className="learning-card">
              <div className="learning-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
