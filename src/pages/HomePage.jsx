import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Projects from '../components/Projects'
import ShopByCategory from '../components/ShopByCategory'
import Courses from '../components/Courses'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <Projects limit={4} showViewAll />
      <ShopByCategory />
      <Courses />
      <Blog />
      <Footer />
    </>
  )
}
