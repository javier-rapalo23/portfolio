import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      role: t('experience.exp1.role'),
      company: t('experience.exp1.company'),
      location: t('experience.exp1.location'),
      period: t('experience.exp1.period'),
      achievements: [
        t('experience.exp1.achievement1'),
        t('experience.exp1.achievement2'),
        t('experience.exp1.achievement3'),
        t('experience.exp1.achievement4'),
        t('experience.exp1.achievement5'),
        t('experience.exp1.achievement6'),
        t('experience.exp1.achievement7'),
      ],
      technologies: ['React', 'React Native', 'C#', '.NET', 'Node.js', 'SQL Server', 'Linux', 'Nginx', 'PM2'],
    },
    {
      id: 2,
      role: t('experience.exp2.role'),
      company: t('experience.exp2.company'),
      location: t('experience.exp2.location'),
      period: t('experience.exp2.period'),
      achievements: [
        t('experience.exp2.achievement1'),
        t('experience.exp2.achievement2'),
        t('experience.exp2.achievement3'),
        t('experience.exp2.achievement4'),
      ],
      technologies: ['C#', 'JavaScript', 'MVC', 'Entity Framework', 'PostgreSQL', 'SQL Server', 'GitHub'],
    },
    {
      id: 3,
      role: t('experience.exp3.role'),
      company: t('experience.exp3.company'),
      location: t('experience.exp3.location'),
      period: t('experience.exp3.period'),
      achievements: [
        t('experience.exp3.achievement1'),
        t('experience.exp3.achievement2'),
        t('experience.exp3.achievement3'),
      ],
      technologies: ['Oracle APEX', 'PL/SQL', 'Oracle Database'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-8" style={{backgroundColor: 'rgba(2, 6, 23, 0.8)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-12 bg-gradient-primary bg-clip-text text-transparent font-bold">
          {t('experience.title')}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-8 rounded-xl border hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(56, 189, 248, 0.2)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#38BDF8'}}>
                    {exp.role}
                  </h3>
                  <p className="text-xl mb-2" style={{color: '#E5E7EB'}}>
                    {exp.company}
                  </p>
                  <p className="text-sm" style={{color: '#94A3B8'}}>
                    {exp.location}
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
                  {exp.period}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3" style={{color: '#E5E7EB'}}>
                  {t('experience.achievements')}:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{color: '#94A3B8'}}
                    >
                      <span className="mr-3 mt-1" style={{color: '#38BDF8'}}>▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      color: '#38BDF8',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
