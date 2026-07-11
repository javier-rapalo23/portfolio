import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../constants';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 pt-16 pb-8 gap-16">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium border" style={{color: '#0070F3', borderColor: 'rgba(0, 112, 243, 0.3)', backgroundColor: 'rgba(0, 112, 243, 0.08)'}}>
          {t('hero.eyebrow')}
        </span>
        <h1 className="text-4xl md:text-6xl mb-6 leading-[1.05] text-white">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl" style={{color: '#a1a1aa'}}>
          {t('hero.description')}
        </p>
        <div className="flex gap-4 flex-wrap items-center">
          <a
            href={getWhatsAppLink(t('hero.whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold transition-colors duration-200"
            style={{backgroundColor: '#0070F3', color: '#ffffff'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#338eff'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0070F3'}
          >
            {t('hero.contact')}
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-semibold border transition-colors duration-200"
            style={{color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.16)'}}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)'}
          >
            {t('hero.viewProjects')}
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-full md:flex-1 mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <img
            src="/profile.jpg"
            alt="Javier Orellana Rápalo"
            className="w-full h-full rounded-full object-cover border"
            style={{borderColor: 'rgba(255, 255, 255, 0.12)'}}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
