import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './SectionHeader';

// El stack de cada puesto se deriva de los logros que describe esa misma
// entrada. Antes las listas estaban desplazadas una posición y exp4 no se
// renderizaba, aunque sus textos ya existían en las traducciones.
const jobs = [
  { key: 'exp1', tech: ['React', 'React Native', 'Node.js'] },
  {
    key: 'exp2',
    tech: ['React', 'React Native', 'C#', '.NET', 'Node.js', 'SQL Server', 'Linux', 'Nginx', 'PM2'],
  },
  {
    key: 'exp3',
    tech: ['C#', 'JavaScript', 'MVC', 'Entity Framework', 'PostgreSQL', 'SQL Server', 'GitHub'],
  },
  { key: 'exp4', tech: ['Oracle APEX', 'PL/SQL', 'Oracle Database'] },
];

const ease = [0.22, 1, 0.36, 1];

/** t() devuelve la propia clave cuando no existe: eso marca el final de la lista. */
const collectAchievements = (t, expKey) => {
  const out = [];
  for (let i = 1; i <= 10; i += 1) {
    const key = `experience.${expKey}.achievement${i}`;
    const value = t(key);
    if (value === key) break;
    out.push(value);
  }
  return out;
};

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-28 lg:py-40">
      <div className="shell">
        <SectionHeader index="02" label={t('nav.experience')} title={t('experience.title')} />

        <ol className="mt-14 list-none lg:mt-20">
          {jobs.map((job, index) => {
            const achievements = collectAchievements(t, job.key);

            return (
              <motion.li
                key={job.key}
                className="group relative grid grid-cols-12 gap-y-6 border-t border-soft py-10 lg:gap-x-8 lg:py-14"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.04 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                {/* Marca de acento sobre la regla: crece al pasar el cursor. */}
                <span
                  aria-hidden
                  className="absolute -top-px left-0 h-px w-12 bg-accent transition-[width] duration-500 ease-editorial group-hover:w-28"
                />

                <div className="col-span-12 lg:col-span-3">
                  <div className="lg:sticky lg:top-28">
                    <span className="eyebrow tnum text-accent">
                      {String(jobs.length - index).padStart(2, '0')}
                    </span>
                    <p className="tnum mt-3 font-mono text-sm text-ink">
                      {t(`experience.${job.key}.period`)}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-ink-faint">
                      {t(`experience.${job.key}.location`)}
                    </p>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-9">
                  <h3 className="font-display text-2xl leading-snug text-ink-strong sm:text-3xl">
                    {t(`experience.${job.key}.role`)}
                  </h3>
                  <p className="mt-2 text-base font-medium text-accent-soft">
                    {t(`experience.${job.key}.company`)}
                  </p>

                  <ul className="mt-7 list-none space-y-3">
                    {achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-4">
                        <span
                          aria-hidden
                          className="mt-[0.7rem] h-px w-4 shrink-0 bg-ink-ghost"
                        />
                        <span className="max-w-prose leading-relaxed text-ink-muted">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
                    <span className="eyebrow mr-1">{t('experience.stackLabel')}</span>
                    {job.tech.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
