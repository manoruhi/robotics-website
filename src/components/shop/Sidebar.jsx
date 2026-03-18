import './shop.css'

const categories = ['Robotics', 'STEM', 'AI']
const grades = ['1st', '2nd', '3rd']
const brands = ['STEMCITY', 'Shikshak Solutions', 'Flashforge']

export default function Sidebar({ sortBy, onSortChange }) {
  return (
    <aside className="shop-sidebar">
      <div className="shop-sidebar-inner">
        <h2 className="shop-sidebar-heading">Filters</h2>

        <section className="shop-filter-section">
          <h3 className="shop-filter-title">Sort By</h3>
          <div className="shop-filter-options">
            <label className="shop-radio-option">
              <input
                type="radio"
                name="sortBy"
                value="popular"
                checked={sortBy === 'popular'}
                onChange={() => onSortChange('popular')}
              />
              <span>Most Popular</span>
            </label>
            <label className="shop-radio-option">
              <input
                type="radio"
                name="sortBy"
                value="new"
                checked={sortBy === 'new'}
                onChange={() => onSortChange('new')}
              />
              <span>New Arrival</span>
            </label>
            <label className="shop-radio-option">
              <input
                type="radio"
                name="sortBy"
                value="priceLow"
                checked={sortBy === 'priceLow'}
                onChange={() => onSortChange('priceLow')}
              />
              <span>Price: Low to High</span>
            </label>
            <label className="shop-radio-option">
              <input
                type="radio"
                name="sortBy"
                value="priceHigh"
                checked={sortBy === 'priceHigh'}
                onChange={() => onSortChange('priceHigh')}
              />
              <span>Price: High to Low</span>
            </label>
            <label className="shop-radio-option">
              <input
                type="radio"
                name="sortBy"
                value="alpha"
                checked={sortBy === 'alpha'}
                onChange={() => onSortChange('alpha')}
              />
              <span>Alphabetically</span>
            </label>
            <label className="shop-radio-option">
              <input
                type="radio"
                name="sortBy"
                value="rating"
                checked={sortBy === 'rating'}
                onChange={() => onSortChange('rating')}
              />
              <span>Rating</span>
            </label>
          </div>
        </section>

        <section className="shop-filter-section">
          <h3 className="shop-filter-title">Shop By Category</h3>
          <div className="shop-filter-options">
            {categories.map((cat) => (
              <label key={cat} className="shop-checkbox-option">
                <input type="checkbox" />
                <span>{cat}</span>
              </label>
            ))}
          </div>
          <button type="button" className="shop-link-button">
            Show More
          </button>
        </section>

        <section className="shop-filter-section">
          <h3 className="shop-filter-title">Shop By Grade</h3>
          <div className="shop-filter-options">
            {grades.map((grade) => (
              <label key={grade} className="shop-checkbox-option">
                <input type="checkbox" />
                <span>{grade}</span>
              </label>
            ))}
          </div>
          <button type="button" className="shop-link-button">
            Show More
          </button>
        </section>

        <section className="shop-filter-section">
          <h3 className="shop-filter-title">Shop By Brand</h3>
          <div className="shop-filter-options">
            {brands.map((brand) => (
              <label key={brand} className="shop-checkbox-option">
                <input type="checkbox" />
                <span>{brand}</span>
              </label>
            ))}
          </div>
          <button type="button" className="shop-link-button">
            Show More
          </button>
        </section>
      </div>
    </aside>
  )
}

