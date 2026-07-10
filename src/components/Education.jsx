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
    <section id="education" className="py-24 px-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.08)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-semibold tracking-tight" style={{color: '#F5F5F7'}}>
          {t('education.title')}
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-8 rounded-2xl border transition-colors duration-200"
              style={{
                backgroundColor: '#1d1d1f',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-2" style={{color: '#F5F5F7'}}>
                    {edu.degree}
                  </h3>
                  <p className="text-lg mb-2" style={{color: '#a1a1a6'}}>
                    {edu.institution}
                  </p>
                  <p className="text-sm" style={{color: '#86868B'}}>
                    {edu.location}
                  </p>
                </div>
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap"
                  style={{
                    backgroundColor: 'rgba(41, 151, 255, 0.12)',
                    color: '#2997FF',
                  }}
                >
                  {edu.period}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{color: '#86868B'}}>
                  {t('education.highlights')}
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{color: '#a1a1a6'}}
                    >
                      <span className="mr-3 mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{backgroundColor: '#2997FF'}}></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
