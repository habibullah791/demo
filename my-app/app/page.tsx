import About from './components/about'
import Header from './components/header'
import HeroSection from './components/heroSection'
import Products from './components/product'
import TopBar from './components/topBar'
import WhyChooseUs from './components/whyChooseUs'
import UserForm from './components/userForm'; // Import the UserForm component
import Testimonial from './components/testimonial'
import Gallery from './components/gallery'
import Footer from './components/footer'

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <HeroSection />
      <Products />
      <About />
      <WhyChooseUs />
      <UserForm />
      <Testimonial />
      <Gallery />
      <Footer />
    </main>
  )
}
