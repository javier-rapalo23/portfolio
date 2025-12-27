import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="footer">
        <p>© 2025 Javier Orellana Rápalo. Desarrollador de Software en Honduras 🇭🇳</p>
      </footer>
    </div>
  )
}

export default App
