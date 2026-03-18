import { useState, useEffect } from 'react'
import './shop.css'

const BANNER_INTERVAL = 4000

const banners = [
  { image: '/images/frame 1.png', alt: 'Shop banner 1' },
  { image: '/images/frame1.png', alt: 'Shop banner 2' },
]

export default function ShopBanner() {
  const [index, setIndex] = useState(0)

  const goTo = (i) => setIndex((i + banners.length) % banners.length)

  useEffect(() => {
    if (banners.length <= 1) return
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % banners.length), BANNER_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="shop-banner">
      <div className="shop-banner-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {banners.map((slide, i) => (
          <div key={i} className="shop-banner-slide">
            <img
              src={slide.image}
              alt={slide.alt}
              className="shop-banner-img"
            />
          </div>
        ))}
      </div>
      {banners.length > 1 && (
        <>
          <div className="shop-banner-dots">
            {banners.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`shop-banner-dot ${i === index ? 'active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="shop-banner-arrow shop-banner-prev"
            aria-label="Previous"
            onClick={() => goTo(index - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="shop-banner-arrow shop-banner-next"
            aria-label="Next"
            onClick={() => goTo(index + 1)}
          >
            ›
          </button>
        </>
      )}
    </section>
  )
}
