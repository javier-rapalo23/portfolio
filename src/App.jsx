import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
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
      <Contact />
      <footer className="py-10 text-center border-t" style={{borderColor: 'rgba(255, 255, 255, 0.05)'}}>
        <p className="text-sm" style={{color: '#8f8f8f'}}>
          © 2025 Javier Orellana Rápalo. {t('footer.text')}
        </p>
      </footer>
    </div>
  )
}

export default App
