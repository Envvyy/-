import Header from './components/Header'
import Hero from './components/Hero'
import ImageSlider from './components/ImageSlider'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <ImageSlider />
      </main>
      <Footer />
    </div>
  )
}

export default App
