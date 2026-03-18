import './blog.css'

const posts = [
  { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80', title: 'Getting Started with STEM', date: 'Feb 15, 2025', excerpt: 'Tips for beginners in robotics and electronics.' },
  { image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80', title: 'Building Your First Robot', date: 'Feb 10, 2025', excerpt: 'Step-by-step guide to your first project.' },
  { image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80', title: 'Community Spotlight', date: 'Feb 5, 2025', excerpt: 'Meet learners who are changing the game.' },
]

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-inner">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">Stories, tutorials, and updates from the STEM community.</p>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <a href="#" className="blog-card-image-wrap">
                <div className="blog-card-image" style={{ backgroundImage: `url('${post.image}')` }} />
              </a>
              <div className="blog-card-content">
                <time className="blog-date">{post.date}</time>
                <h3><a href="#">{post.title}</a></h3>
                <p>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
