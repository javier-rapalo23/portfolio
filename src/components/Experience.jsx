import { motion } from 'framer-motion';
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
    <section id="experience" className="py-32 lg:py-48 px-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.05)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">
          {t('experience.title')}
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="p-8 rounded-[20px] border transition-colors duration-300"
              style={{ backgroundColor: '#121212', borderColor: 'rgba(255, 255, 255, 0.08)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {exp.role}
                  </h3>
                  <p className="text-lg mb-2" style={{color: '#a1a1aa'}}>
                    {exp.company}
                  </p>
                  <p className="text-sm" style={{color: '#8f8f8f'}}>
                    {exp.location}
                  </p>
                </div>
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border"
                  style={{color: '#a1a1aa', borderColor: 'rgba(255, 255, 255, 0.14)'}}
                >
                  {exp.period}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{color: '#8f8f8f'}}>
                  {t('experience.achievements')}
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{color: '#a1a1aa'}}
                    >
                      <span className="mr-3 mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{backgroundColor: '#0070F3'}}></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm border"
                    style={{
                      color: '#a1a1aa',
                      borderColor: 'rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
