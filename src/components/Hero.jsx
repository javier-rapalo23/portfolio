import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 pt-32 pb-8 gap-16" >
      <div className="flex-1 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 leading-tight tracking-tight" style={{color: '#F5F5F7'}}>
          {t('hero.greeting')} <span style={{color: '#2997FF'}}>Javier Orellana Rápalo</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 font-medium" style={{color: '#86868B'}}>
          {t('hero.title')}
        </h2>
        <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl" style={{color: '#a1a1a6'}}>
          {t('hero.description')}
        </p>
        <div className="flex gap-4 flex-wrap items-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-medium transition-all duration-200"
            style={{backgroundColor: '#2997FF', color: '#000'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#54a8ff'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2997FF'}
          >
            {t('hero.viewProjects')}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-medium transition-colors duration-200"
            style={{color: '#2997FF'}}
            onMouseEnter={(e) => e.currentTarget.style.color = '#54a8ff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#2997FF'}
          >
            {t('hero.contact')} &rarr;
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:flex-1 mt-8 md:mt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <img
            src="/profile.jpg"
            alt="Javier Orellana Rápalo"
            className="w-full h-full rounded-full object-cover border"
            style={{borderColor: 'rgba(255, 255, 255, 0.12)'}}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
