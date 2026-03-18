import { useMemo, useState } from 'react'
import './shop.css'
import ShopBanner from './ShopBanner'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const products = [
  {
    id: 1,
    name: 'Arduino Uno R3',
    image:  '/images/Arduino.jpg',
    price: 350,
    oldPrice: 400,
    rating: 4.6,
    reviews: 120,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '1st',
    brand: 'ROBOEYES',
    fastDelivery: true,
    bestPrice: true,
  },
  {
    id: 2,
    name: 'ESP32',
    image: '/images/ESP32.jpg',
    price: 350,
    oldPrice: 400,
    rating: 4.4,
    reviews: 86,
    popularity: 8,
    isNew: true,
    category: 'STEM',
    grade: '2nd',
    brand: 'ROBOEYES',
    fastDelivery: true,
    bestPrice: false,
  },
  {
    id: 3,
    name: 'ESP8266',
    image:'/images/ESP8266.webp',
    price: 350,
    oldPrice: 400,
    rating: 4.8,
    reviews: 64,
    popularity: 9,
    isNew: true,
    category: 'AI',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: true,
    bestPrice: true,
  },
  {
    id: 4,
    name: 'HC-SR04 Ultrasonic Sensor',
    image:'/images/ultrasonic.jpg',
    price: 70,
    oldPrice: 100,
    rating: 4.5,
    reviews: 34,
    popularity: 7,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 5,
    name: 'IR sensor',
    image:'/images/IR.jpg',
    price: 70,
    oldPrice: 100,
    rating: 4.7,
    reviews: 95,
    popularity: 9,
    isNew: false,
    category: 'Robotics',
    grade: '2nd',
    brand: 'ROBOEYES',
    fastDelivery: true,
    bestPrice: true,
  },
  {
    id: 6,
    name: 'LDR SENSOR ',
    image:
      '/images/LDR.webp',
    price: 70,
    oldPrice: 100,
    rating: 4.3,
    reviews: 54,
    popularity: 6,
    isNew: false,
    category: 'STEM',
    grade: '1st',
    brand: 'ROBOEYES',
    fastDelivery: true,
    bestPrice: false,
  },
  {
    id: 7,
    name: 'SOIL MOISTURE SENSOR',
    image:
      '/images/soil.jpg',
    price: 3199,
    oldPrice: 3499,
    rating: 4.6,
    reviews: 40,
    popularity: 7,
    isNew: true,
    category: 'AI',
    grade: '2nd',
    brand: 'ROBOEYES',
    fastDelivery: true,
    bestPrice: false,
  },
  {
    id: 8,
    name: 'Raspberry Pi 5 Model B',
    image:
      '/images/Raspberry pi.webp',
    price: 7999,
    oldPrice: 8999,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 9,
    name: 'SG90 9G Micro Motor Servo',
    image:
      '/images/SG90.webp',
    price: 150,
    oldPrice: 200,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 10,
    name: 'Mini Buzzer (5V-12V)',
    image:
      '/images/buzzer.webp',
    price: 10,
    oldPrice: 20,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 11,
    name: 'LM2596 DC-DC Buck Converter Module – Adjustable Step-Down.',
    image:
      '/images/DC-DC.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 12,
    name: 'HC-05 Bluetooth Module',
    image:
      '/images/HC_05.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 13,
    name: 'DC 3-6V Submersible Mini water pump',
    image:
      '/images/water_pump.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 14,
    name: '400 POINT BREADBOARD',
    image:
      '/images/Mini_Breadboard.webp',
    price: 120,
    oldPrice: 200,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 15,
    name: 'Male to Male Dupont Jumper Wires 40 Pieces Cable',
    image:
      '/images/Jumper_MM_40_Pin.webp',
    price: 80,
    oldPrice: 200,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 16,
    name: 'Male to Female Dupont Jumper Wires 40 Pieces Cable',
    image:
      '/images/Jumper_MF_40_Pin.webp',
    price: 80,
    oldPrice: 200,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 17,
    name: 'Arduino Nano',
    image:
      '/images/Nano.webp',
    price: 250,
    oldPrice: 300,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 18,
    name: 'MG90S Metal Gear Micro Servo',
    image:
      '/images/MG90.webp',
    price: 250,
    oldPrice: 300,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 19,
    name: 'RC 522 RFID Reader',
    image:
      '/images/RFID.webp',
    price: 250,
    oldPrice: 300,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 20,
    name: 'L293D Motor Driver Module',
    image:
      '/images/L293MOTORDRIVERMODULE.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 21,
    name: 'L293D Motor Driver Module',
    image:
      '/images/L293MOTORDRIVERMODULE.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 22,
    name: 'L293D Motor Driver Module',
    image:
      '/images/L293MOTORDRIVERMODULE.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 23,
    name: 'L293D Motor Driver Module',
    image:
      '/images/L293MOTORDRIVERMODULE.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 24,
    name: 'L293D Motor Driver Module',
    image:
      '/images/L293MOTORDRIVERMODULE.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
  {
    id: 25,
    name: 'L293D Motor Driver Module',
    image:
      '/images/L293MOTORDRIVERMODULE.webp',
    price: 50,
    oldPrice: 100,
    rating: 4.9,
    reviews: 18,
    popularity: 10,
    isNew: false,
    category: 'Robotics',
    grade: '3rd',
    brand: 'ROBOEYES',
    fastDelivery: false,
    bestPrice: true,
  },
]

export default function ShopPage() {
  const [sortBy, setSortBy] = useState('popular')
  const [selected, setSelected] = useState(null)

  const normalizedProducts = useMemo(() => {
    return products.map((p) => ({
      ...p,
      description:
        p.description ||
        `${p.category || 'Robotics'} component by ${p.brand || 'ROBOEYES'} for STEM learning and prototyping.`,
      specifications: Array.isArray(p.specifications) ? p.specifications : [],
      applications: Array.isArray(p.applications) ? p.applications : [],
    }))
  }, [])

  const sortedProducts = useMemo(() => {
    const items = [...normalizedProducts]
    switch (sortBy) {
      case 'priceLow':
        return items.sort((a, b) => a.price - b.price)
      case 'priceHigh':
        return items.sort((a, b) => b.price - a.price)
      case 'alpha':
        return items.sort((a, b) => a.name.localeCompare(b.name))
      case 'rating':
        return items.sort((a, b) => b.rating - a.rating)
      case 'new':
        return items.sort((a, b) => Number(b.isNew) - Number(a.isNew))
      case 'popular':
      default:
        return items.sort((a, b) => b.popularity - a.popularity)
    }
  }, [sortBy, normalizedProducts])

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product.name)
  }

  return (
    <div className="shop-page">
      <ShopBanner />
      <div className="shop-container">
        <main className="shop-main">
          <header className="shop-header">
            <div>
              <h1 className="shop-title">Shop Robotics & Electronics Components </h1>
              <p className="shop-subtitle">
                Curated learning electronics components and projects for school & college, hobbyists students.
              </p>
            </div>
            <div className="shop-meta">
              <span>{sortedProducts.length} products</span>
            </div>
          </header>

          <section className="shop-grid">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={setSelected}
                onAddToCart={handleAddToCart}
              />
            ))}
          </section>
        </main>
      </div>
      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  )
}

