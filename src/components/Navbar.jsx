import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Cerrar menú al hacer clic
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 shadow-lg shadow-black/10" style={{backgroundColor: 'rgba(15, 23, 42, 0.95)'}}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Portfolio
          </h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 list-none">
              <li>
                <a 
                  onClick={() => scrollToSection('home')}
                  className="font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('about')}
                  className="font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('projects')}
                  className="font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('skills')}
                  className="font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {t('nav.skills')}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('contact')}
                  className="font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
            
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg font-medium transition-all border"
              style={{backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8', borderColor: 'rgba(56, 189, 248, 0.3)'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.2)'}
            >
              {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all border"
              style={{backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8', borderColor: 'rgba(56, 189, 248, 0.3)'}}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{color: '#38BDF8'}}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4 list-none">
              <li>
                <a 
                  onClick={() => scrollToSection('home')}
                  className="block py-2 font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                >
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('about')}
                  className="block py-2 font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                >
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('projects')}
                  className="block py-2 font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                >
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('skills')}
                  className="block py-2 font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                >
                  {t('nav.skills')}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('contact')}
                  className="block py-2 font-medium cursor-pointer transition-colors"
                  style={{color: '#94A3B8'}}
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
