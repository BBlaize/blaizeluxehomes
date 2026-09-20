import './App.css'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Mission } from './components/Mission'
import { Nav } from './components/Nav'
import { Neighborhood } from './components/Neighborhood'
import { Residences } from './components/Residences'

function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Residences />
        <Experience />
        <Neighborhood />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
