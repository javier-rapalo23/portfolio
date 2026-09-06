import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './SectionHeader';

const ease = [0.22, 1, 0.36, 1];

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ProjectMedia = ({ project, className = '' }) => {
  const frame = project.vertical
    ? 'aspect-[4/5] flex items-center justify-center px-8 py-6'
    : 'aspect-[16/10]';

  return (
    <div className={`relative overflow-hidden bg-surface-inset ${frame} ${className}`}>
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        className={
          project.vertical
            ? 'h-full w-auto rounded-inner object-contain shadow-lift transition-transform duration-700 ease-editorial group-hover:scale-[1.02]'
            : 'h-full w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.03]'
        }
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(8,8,10,0.55)] via-transparent to-transparent"
      />
    </div>
  );
};

const ProjectBody = ({ project, t, size = 'default' }) => {
  const isDownload = project.demo.toLowerCase().endsWith('.apk');

  return (
    <>
      <h3
        className={`font-display text-ink-strong ${
          size === 'lg' ? 'text-3xl leading-tight sm:text-4xl' : 'text-2xl leading-snug'
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-4 max-w-prose leading-relaxed text-ink-muted">{project.description}</p>

      <ul className="mt-6 flex list-none flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-x-7 gap-y-3 pt-8">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-underline text-sm font-semibold">
            <GithubIcon />
            {t('projects.github')}
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-underline text-sm font-semibold">
            {isDownload ? <DownloadIcon /> : <ExternalIcon />}
            {isDownload ? t('projects.download') : t('projects.demo')}
          </a>
        )}
      </div>
    </>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      alt: 'Captura del ERP Vixo Coffee mostrando el panel de inventario',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/javier-rapalo23/vixo-coffee',
      demo: '',
      image: '/capturas/vixo_coffee.png',
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      alt: 'Captura del ERP Vixo con el modulo de gestion de productos',
      tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/javier-rapalo23/VI-ERP',
      demo: 'https://vi-erp-nine.vercel.app',
      image: '/capturas/vixo-erp.png',
    },
    {
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      alt: 'Captura de FreshControl Web con el control de inventario y ventas',
      tech: ['React', 'Go', 'TypeScript', 'Vite'],
      github: 'https://github.com/javier-rapalo23/freshcontrol-web',
      demo: 'https://freshcontrol-web.vercel.app/',
      image: '/capturas/freshcontrol-web.png',
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      alt: 'Panel de analiticas de R-Control Web con inventarios de reciclaje',
      tech: ['React', 'TypeScript', 'Vite'],
      github: 'https://github.com/javier-rapalo23/R-ControlWeb',
      demo: 'https://r-control-web.vercel.app/',
      image: '/capturas/r-control-web.png',
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      alt: 'Pantalla de la aplicacion movil Finmaster con formularios financieros',
      tech: ['React Native', 'JavaScript', 'WatermelonDB'],
      github: 'https://github.com/javier-rapalo23/Finmaster',
      demo: 'https://github.com/javier-rapalo23/Finmaster/releases/download/v1.0.2/app-release.apk',
      image: '/capturas/Finmaster.jpg',
      vertical: true,
    },
    {
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      alt: 'Pantalla de la aplicacion movil R-Control con seguimiento de inventario',
      tech: ['React Native', 'TypeScript', 'SQLite'],
      github: 'https://github.com/javier-rapalo23/R-ControlApp',
      demo: 'https://github.com/javier-rapalo23/R-ControlApp/releases/download/v1.0.1/app-release.apk',
      image: '/capturas/R-control-app.jpg',
      vertical: true,
    },
  ];

  const [featured, second, third, fourth, ...mobile] = projects;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease, delay },
    viewport: { once: true, margin: '-60px' },
  });

  return (
    <section id="projects" className="py-28 lg:py-40">
      <div className="shell">
        <SectionHeader index="04" label={t('projects.subtitle')} title={t('projects.title')} />

        <div className="mt-14 grid grid-cols-12 gap-6 lg:mt-20">
          <motion.article className="group panel-interactive col-span-12 overflow-hidden rounded-panel" {...reveal(0)}>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <ProjectMedia project={featured} className="lg:col-span-7" />
              <div className="flex flex-col p-8 lg:col-span-5 lg:p-10">
                <ProjectBody project={featured} t={t} size="lg" />
              </div>
            </div>
          </motion.article>

          <motion.article
            className="group panel-interactive col-span-12 flex flex-col overflow-hidden rounded-panel lg:col-span-7"
            {...reveal(0.06)}
          >
            <ProjectMedia project={second} />
            <div className="flex flex-1 flex-col p-8">
              <ProjectBody project={second} t={t} />
            </div>
          </motion.article>

          <motion.article
            className="group panel-interactive col-span-12 flex flex-col overflow-hidden rounded-panel lg:col-span-5"
            {...reveal(0.12)}
          >
            <ProjectMedia project={third} />
            <div className="flex flex-1 flex-col p-8">
              <ProjectBody project={third} t={t} />
            </div>
          </motion.article>

          <motion.article className="group panel-interactive col-span-12 overflow-hidden rounded-panel" {...reveal(0.06)}>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <ProjectMedia project={fourth} className="lg:order-2 lg:col-span-7" />
              <div className="flex flex-col p-8 lg:order-1 lg:col-span-5 lg:p-10">
                <ProjectBody project={fourth} t={t} size="lg" />
              </div>
            </div>
          </motion.article>

          {mobile.map((project, index) => (
            <motion.article
              key={project.title}
              className="group panel-interactive col-span-12 flex flex-col overflow-hidden rounded-panel md:col-span-6"
              {...reveal(0.06 + index * 0.06)}
            >
              <ProjectMedia project={project} />
              <div className="flex flex-1 flex-col p-8">
                <ProjectBody project={project} t={t} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
