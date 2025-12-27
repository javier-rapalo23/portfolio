import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-between max-w-7xl mx-auto px-8 pt-24 pb-8 gap-16">
      <div className="flex-1 animate-fade-in-up">
        <h1 className="text-6xl font-extrabold mb-4 leading-tight">
          {t('hero.greeting')} <span className="bg-gradient-primary bg-clip-text text-transparent">Javier Orellana Rápalo</span>
        </h1>
        <h2 className="text-3xl mb-6 font-semibold" style={{color: '#94A3B8'}}>
          {t('hero.title')}
        </h2>
        <p className="text-xl mb-8 leading-relaxed" style={{color: '#E5E7EB'}}>
          {t('hero.description')}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-lg bg-gradient-primary text-white font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/40"
          >
            {t('hero.viewProjects')}
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-lg bg-transparent font-semibold transition-all border-2"
            style={{color: '#38BDF8', borderColor: '#38BDF8'}}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#38BDF8'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#38BDF8'; }}
          >
            {t('hero.contact')}
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="relative">
          <img 
            src="/profile.jpg" 
            alt="Javier Orellana Rápalo" 
            className="w-96 h-96 rounded-full object-cover border-4 shadow-2xl"
            style={{borderColor: '#38BDF8', boxShadow: '0 0 60px rgba(56, 189, 248, 0.3)'}}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-sky-400/20 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
