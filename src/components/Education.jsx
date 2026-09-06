import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './SectionHeader';

const ease = [0.22, 1, 0.36, 1];

const Education = () => {
  const { t } = useLanguage();

  const highlights = [t('education.edu1.highlight1'), t('education.edu1.highlight2')];

  return (
    <section id="education" className="py-28 lg:py-40">
      <div className="shell">
        <SectionHeader index="03" label={t('nav.education')} title={t('education.title')} />

        {/* Una sola entrada: no merece una tarjeta gigante, sino la misma
            gramática de riel que la sección de experiencia. */}
        <motion.article
          className="group relative mt-14 grid grid-cols-12 gap-y-6 border-t border-soft py-10 lg:mt-20 lg:gap-x-8 lg:py-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span
            aria-hidden
            className="absolute -top-px left-0 h-px w-12 bg-accent transition-[width] duration-500 ease-editorial group-hover:w-28"
          />

          <div className="col-span-12 lg:col-span-3">
            <p className="tnum font-mono text-sm text-ink">{t('education.edu1.period')}</p>
            <p className="mt-2 text-sm leading-snug text-ink-faint">
              {t('education.edu1.location')}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <h3 className="font-display text-2xl leading-snug text-ink-strong sm:text-3xl">
              {t('education.edu1.degree')}
            </h3>
            <p className="mt-2 text-base font-medium text-accent-soft">
              {t('education.edu1.institution')}
            </p>

            <ul className="mt-7 list-none space-y-3">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-4">
                  <span aria-hidden className="mt-[0.7rem] h-px w-4 shrink-0 bg-ink-ghost" />
                  <span className="max-w-prose leading-relaxed text-ink-muted">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Education;
