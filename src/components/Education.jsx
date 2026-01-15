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
    <section id="education" className="py-24 px-8" style={{backgroundColor: 'rgba(2, 6, 23, 0.8)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-12 bg-gradient-primary bg-clip-text text-transparent font-bold">
          {t('education.title')}
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-8 rounded-xl border hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(56, 189, 248, 0.2)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#38BDF8'}}>
                    {edu.degree}
                  </h3>
                  <p className="text-xl mb-2" style={{color: '#E5E7EB'}}>
                    {edu.institution}
                  </p>
                  <p className="text-sm" style={{color: '#94A3B8'}}>
                    {edu.location}
                  </p>
                </div>
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    color: '#38BDF8',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                  }}
                >
                  {edu.period}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3" style={{color: '#E5E7EB'}}>
                  {t('education.highlights')}:
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{color: '#94A3B8'}}
                    >
                      <span className="mr-3 mt-1" style={{color: '#38BDF8'}}>▹</span>
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
