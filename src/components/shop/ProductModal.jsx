import { useEffect } from 'react'
import './shop.css'

export default function ProductModal({ product, onClose, onAddToCart }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const price = product.price.toLocaleString('en-IN')
  const oldPrice = product.oldPrice ? product.oldPrice.toLocaleString('en-IN') : null

  return (
    <div className="shop-modal-overlay" role="dialog" aria-modal="true">
      <div className="shop-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="shop-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="shop-modal-grid">
          <div className="shop-modal-imageWrap">
            <img src={product.image} alt={product.name} className="shop-modal-image" />
          </div>

          <div className="shop-modal-content">
            <h2 className="shop-modal-title">{product.name}</h2>

            <div className="shop-modal-ratingRow">
              <span className="shop-product-stars">★ {Number(product.rating).toFixed(1)}</span>
              <span className="shop-product-rating-count">({product.reviews}+ reviews)</span>
            </div>

            <p className="shop-modal-desc">{product.description}</p>

            <div className="shop-product-pricing">
              {oldPrice && <span className="shop-product-price-old">₹{oldPrice}</span>}
              <span className="shop-product-price-new">₹{price}</span>
            </div>

            <button type="button" className="shop-product-button" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>

            <div className="shop-modal-sections">
              <div className="shop-modal-section">
                <h3>Specifications</h3>
                {product.specifications?.length ? (
                  <ul>
                    {product.specifications.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="shop-modal-muted">Specifications will be updated soon.</p>
                )}
              </div>

              <div className="shop-modal-section">
                <h3>Applications</h3>
                {product.applications?.length ? (
                  <ul>
                    {product.applications.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="shop-modal-muted">Applications will be updated soon.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="shop-modal-underlay" aria-label="Close" onClick={onClose} />
    </div>
  )
}

