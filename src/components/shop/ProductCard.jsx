import './shop.css'

export default function ProductCard({ product, onOpen, onAddToCart }) {
  const price = product.price.toLocaleString('en-IN')
  const oldPrice = product.oldPrice?.toLocaleString('en-IN')

  return (
    <article
      className="shop-product-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(product)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onOpen(product)
      }}
    >
      <div className="shop-product-image-wrap">
        {product.badge && <span className="shop-product-badge">{product.badge}</span>}
        <img
          src={product.image}
          alt={product.name}
          className="shop-product-image"
          loading="lazy"
        />
      </div>

      <div className="shop-product-body">
        <h3 className="shop-product-title">{product.name}</h3>

        <div className="shop-product-rating-row">
          <span className="shop-product-stars">★ {product.rating.toFixed(1)}</span>
          <span className="shop-product-rating-count">({product.reviews}+ reviews)</span>
        </div>

        <div className="shop-product-tags">
          {product.fastDelivery && <span>⚡ Fast Delivery</span>}
          {product.bestPrice && <span>₹ Best Price</span>}
        </div>

        <div className="shop-product-pricing">
          {oldPrice && <span className="shop-product-price-old">₹{oldPrice}</span>}
          <span className="shop-product-price-new">₹{price}</span>
        </div>

        <button
          type="button"
          className="shop-product-button"
          onClick={(e) => {
            e.stopPropagation()
            onAddToCart(product)
          }}
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}

