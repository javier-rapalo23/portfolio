import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { useLanguage } from './context/LanguageContext'

function App() {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center border-t" style={{borderColor: 'rgba(255, 255, 255, 0.08)'}}>
        <p className="text-sm" style={{color: '#86868B'}}>
          © 2025 Javier Orellana Rápalo. {t('footer.text')}
        </p>
      </footer>
    </div>
  )
}

export default App
