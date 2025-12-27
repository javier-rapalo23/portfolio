import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
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
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center border-t" style={{backgroundColor: 'rgba(2, 6, 23, 0.8)', borderColor: 'rgba(56, 189, 248, 0.2)'}}>
        <p style={{color: '#94A3B8'}}>
          © 2025 Javier Orellana Rápalo. {t('footer.text')}
        </p>
      </footer>
    </div>
  )
}

export default App
