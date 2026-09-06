import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './SectionHeader';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNginx,
  SiLinux,
  SiVite,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const stack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: '.NET', icon: SiDotnet, color: '#512BD4' },
  { name: 'C#', icon: TbBrandCSharp, color: '#9B4F96' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', icon: SiExpress, color: '#E8E4DC' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'SQL Server', icon: SiMysql, color: '#CC2927' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#E8E4DC' },
  { name: 'Nginx', icon: SiNginx, color: '#009639' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Vite', icon: SiVite, color: '#B073FF' },
];

const ease = [0.22, 1, 0.36, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
  viewport: { once: true, margin: '-80px' },
});

const About = () => {
  const { t } = useLanguage();
  const tags = [t('about.serviceTag1'), t('about.serviceTag2'), t('about.serviceTag3')];

  return (
    <section id="about" className="py-28 lg:py-40">
      <div className="shell">
        <SectionHeader index="01" label={t('about.title')} title={t('about.subtitle')} />

        <div className="mt-16 grid grid-cols-12 gap-y-12 lg:mt-20 lg:gap-x-8">
          <motion.div className="col-span-12 lg:col-span-7" {...reveal(0.05)}>
            <h3 className="font-display text-3xl leading-tight text-ink-strong sm:text-4xl">
              {t('about.serviceTitle')}
            </h3>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
              {t('about.serviceDescription')}
            </p>
            <ul className="mt-8 flex list-none flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent-wash px-4 py-1.5 text-sm font-medium text-accent-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Deliberadamente en la columna 9: deja un hueco de una columna
              a la izquierda para romper el bloque de dos mitades. */}
          <motion.aside
            className="panel col-span-12 rounded-panel p-8 lg:col-span-4 lg:col-start-9"
            {...reveal(0.15)}
          >
            <span className="eyebrow">{t('hero.role')}</span>
            <p className="mt-4 font-display text-2xl leading-snug text-ink-strong">
              {t('about.locationTitle')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {t('about.locationDescription')}
            </p>
            <a href="#contact" className="link-underline mt-6 text-sm font-semibold">
              {t('nav.contact')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.aside>
        </div>

        {/* El stack como lista legible: antes eran 15 cuadrados idénticos
            cuyo nombre solo aparecía en un tooltip. */}
        <motion.div className="mt-20 lg:mt-28" {...reveal(0.05)}>
          <div className="flex items-baseline gap-4">
            <span className="eyebrow">{t('about.stackTitle')}</span>
            <span aria-hidden className="h-px flex-1 bg-[rgba(241,237,231,0.08)]" />
            <span className="eyebrow tnum">{String(stack.length).padStart(2, '0')}</span>
          </div>

          <ul className="mt-2 grid list-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {stack.map((tech) => (
              <li
                key={tech.name}
                className="group flex items-center gap-3 border-b border-faint py-3.5"
              >
                <tech.icon
                  size={17}
                  aria-hidden
                  style={{ color: tech.color }}
                  className="shrink-0 opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                />
                <span className="text-sm text-ink-muted transition-colors duration-200 group-hover:text-ink">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
