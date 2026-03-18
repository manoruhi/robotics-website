import { Link } from 'react-router-dom'
import './shop-by-category.css'

const categories = [
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    title: 'BlueBerry Kit',
    text: 'Microcontroller kits for programming and electronics projects.',
  },
  {
    image: 'https://images.unsplash.com/photo-1561557944-6e7860b2b3b3?w=500&q=80',
    title: 'Robotics Kit',
    text: 'Build and program your own robots with motors and sensors.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=500&q=80',
    title: 'STEM Kit',
    text: 'Science, Technology, Engineering & Math learning kits.',
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80',
    title: 'AI Kit',
    text: 'Artificial intelligence and machine learning starter kits.',
  },
]

export default function ShopByCategory() {
  return (
    <section className="shop-category" id="shop">
      <div className="shop-category-inner">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle">Find the right kits and resources for your learning journey.</p>
        <div className="category-grid">
          {categories.map((cat) => (
            <Link key={cat.title} to="/shop" className="category-card">
              <div
                className="category-card-image"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              <h3>{cat.title}</h3>
              <p>{cat.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
