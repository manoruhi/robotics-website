import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/courses', label: 'Courses' },
  { to: '/#blog', label: 'Blog' },
  { to: '/shop', label: 'Shop' },
  { to: '/control-panel', label: 'Control Panel' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
    document.body.style.overflow = menuOpen ? '' : 'hidden'
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Search:', searchQuery)
      // Add your search logic or navigation
    }
  }

  return (
    <header className="navbar" id="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          ROBOEYES<sup>®</sup>
        </Link>

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <form className="navbar-search" onSubmit={handleSearch} role="search">
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search"
            />
            <button type="submit" className="search-btn" aria-label="Submit search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </form>
          <a href="#shop" className="navbar-cart" aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-count">0</span>
          </a>
        </div>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.label} to={link.to} className="mobile-link" onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <form className="mobile-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mobile-search-input"
          />
          <button type="submit" className="btn-primary">Search</button>
        </form>
        <a href="#shop" className="mobile-link mobile-cart" onClick={closeMenu}>
          Cart (0)
        </a>
      </div>
    </header>
  )
}
