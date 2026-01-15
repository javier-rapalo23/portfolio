import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-8" style={{backgroundColor: 'rgba(2, 6, 23, 0.8)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-12 bg-gradient-primary bg-clip-text text-transparent font-bold">
          {t('about.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{color: '#E5E7EB'}}>
              {t('about.p1')}
            </p>
            <p className="text-lg leading-relaxed" style={{color: '#E5E7EB'}}>
              {t('about.p2')}
            </p>
            <p className="text-lg leading-relaxed" style={{color: '#E5E7EB'}}>
              {t('about.p3')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl border hover:-translate-y-2 transition-transform" style={{backgroundColor: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.2)'}}>
              <h3 className="text-5xl mb-2 font-bold" style={{color: '#38BDF8'}}>2+</h3>
              <p className="text-sm" style={{color: '#94A3B8'}}>{t('about.yearsExp')}</p>
            </div>
            <div className="text-center p-8 rounded-xl border hover:-translate-y-2 transition-transform" style={{backgroundColor: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.2)'}}>
              <h3 className="text-5xl mb-2 font-bold" style={{color: '#38BDF8'}}>20+</h3>
              <p className="text-sm" style={{color: '#94A3B8'}}>{t('about.projectsCompleted')}</p>
            </div>
            <div className="text-center p-8 rounded-xl border hover:-translate-y-2 transition-transform" style={{backgroundColor: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.2)'}}>
              <h3 className="text-5xl mb-2 font-bold" style={{color: '#38BDF8'}}>15+</h3>
              <p className="text-sm" style={{color: '#94A3B8'}}>{t('about.technologies')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
