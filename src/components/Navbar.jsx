import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinkStyle = {
    color: '#a1a1aa',
    fontSize: '0.875rem',
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'education', label: t('nav.education') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl" style={{backgroundColor: 'rgba(3, 3, 3, 0.7)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-base font-bold tracking-tight text-white">
            Javier Orellana
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-7 list-none">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    onClick={() => scrollToSection(link.id)}
                    className="cursor-pointer transition-colors duration-200"
                    style={navLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 border"
                style={{color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.14)'}}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)'}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
              <a
                onClick={() => scrollToSection('contact')}
                className="px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-colors duration-200"
                style={{backgroundColor: '#0070F3', color: '#ffffff'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#338eff'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0070F3'}
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.14)'}}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors"
              style={{color: '#ffffff'}}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="md:hidden pb-4 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.08)'}}>
            <ul className="flex flex-col list-none pt-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    onClick={() => scrollToSection(link.id)}
                    className="block py-2.5 cursor-pointer transition-colors"
                    style={navLinkStyle}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
