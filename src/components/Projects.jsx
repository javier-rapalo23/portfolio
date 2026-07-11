import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Nginx", "PM2"],
      github: "https://github.com/javier-rapalo23/Encomienda",
      demo: "#"
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tech: ["React", "Node.js", "PostgreSQL", "REST API"],
      github: "https://github.com/javier-rapalo23/VI-ERP",
      demo: "https://vi-erp-nine.vercel.app"
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tech: ["React native", "JavaScript", "WatermelonDB"],
      github: "https://github.com/javier-rapalo23/Finmaster",
      demo: "https://github.com/javier-rapalo23/Finmaster/releases/download/v1.0.2/app-release.apk"
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      tech: ["React", "TypeScript", "Vite"],
      github: "https://github.com/javier-rapalo23/R-ControlWeb",
      demo: "https://r-control-web.vercel.app/"
    },
    {
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      tech: ["React","Go", "TypeScript", "Vite"],
      github: "https://github.com/javier-rapalo23/freshcontrol-web",
      demo: "https://freshcontrol-web.vercel.app/"
    },
    {
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      tech: ["React native", "TypeScript", "Sqlite"],
      github: "https://github.com/javier-rapalo23/R-ControlApp",
      demo: "https://github.com/javier-rapalo23/R-ControlApp/releases/download/v1.0.1/app-release.apk"
    },
  ];

  return (
    <section id="projects" className="py-32 lg:py-48 px-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.05)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-[20px] p-8 border transition-all duration-300"
              style={{
                backgroundColor: '#121212',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.6)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 2) * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl mb-3 font-bold text-white">{project.title}</h3>
              <p className="leading-relaxed mb-6" style={{color: '#a1a1aa'}}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm border"
                    style={{color: '#a1a1aa', borderColor: 'rgba(255, 255, 255, 0.12)'}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{color: '#0070F3'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#338eff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0070F3'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t('projects.github')}
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{color: '#0070F3'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#338eff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0070F3'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  {t('projects.demo')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
