import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      id: 1,
      degree: t('education.edu1.degree'),
      institution: t('education.edu1.institution'),
      location: t('education.edu1.location'),
      period: t('education.edu1.period'),
      highlights: [
        t('education.edu1.highlight1'),
        t('education.edu1.highlight2'),
      ],
    },
  ];

  return (
    <section id="education" className="py-32 lg:py-48 px-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.05)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">
          {t('education.title')}
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              className="p-8 rounded-[20px] border transition-colors duration-300"
              style={{ backgroundColor: '#121212', borderColor: 'rgba(255, 255, 255, 0.08)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg mb-2" style={{color: '#a1a1aa'}}>
                    {edu.institution}
                  </p>
                  <p className="text-sm" style={{color: '#8f8f8f'}}>
                    {edu.location}
                  </p>
                </div>
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border"
                  style={{color: '#a1a1aa', borderColor: 'rgba(255, 255, 255, 0.14)'}}
                >
                  {edu.period}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{color: '#8f8f8f'}}>
                  {t('education.highlights')}
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{color: '#a1a1aa'}}
                    >
                      <span className="mr-3 mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{backgroundColor: '#0070F3'}}></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
