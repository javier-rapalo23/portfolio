import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 shadow-lg shadow-black/10" style={{backgroundColor: 'rgba(15, 23, 42, 0.95)'}}>
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Portfolio
        </h2>
        <div className="flex items-center gap-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
