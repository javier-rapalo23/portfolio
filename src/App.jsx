import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLanguage } from './context/LanguageContext'

function App() {
  const { t } = useLanguage();

  return (
    <>
      {/* Primer elemento tabulable: permite saltarse la navegación. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-skip focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-surface-inset"
      >
        {t('a11y.skip')}
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
