import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.08)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-semibold tracking-tight" style={{color: '#F5F5F7'}}>
          {t('about.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{color: '#a1a1a6'}}>
              {t('about.p1')}
            </p>
            <p className="text-lg leading-relaxed" style={{color: '#a1a1a6'}}>
              {t('about.p2')}
            </p>
            <p className="text-lg leading-relaxed" style={{color: '#a1a1a6'}}>
              {t('about.p3')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-8 rounded-2xl border transition-colors duration-200" style={{backgroundColor: '#1d1d1f', borderColor: 'rgba(255, 255, 255, 0.08)'}}>
              <h3 className="text-4xl mb-2 font-semibold" style={{color: '#2997FF'}}>3+</h3>
              <p className="text-sm" style={{color: '#86868B'}}>{t('about.yearsExp')}</p>
            </div>
            <div className="text-center p-8 rounded-2xl border transition-colors duration-200" style={{backgroundColor: '#1d1d1f', borderColor: 'rgba(255, 255, 255, 0.08)'}}>
              <h3 className="text-4xl mb-2 font-semibold" style={{color: '#2997FF'}}>20+</h3>
              <p className="text-sm" style={{color: '#86868B'}}>{t('about.projectsCompleted')}</p>
            </div>
            <div className="text-center p-8 rounded-2xl border transition-colors duration-200" style={{backgroundColor: '#1d1d1f', borderColor: 'rgba(255, 255, 255, 0.08)'}}>
              <h3 className="text-4xl mb-2 font-semibold" style={{color: '#2997FF'}}>15+</h3>
              <p className="text-sm" style={{color: '#86868B'}}>{t('about.technologies')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
