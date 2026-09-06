import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../constants';

const ease = [0.22, 1, 0.36, 1];

// Entrada escalonada: nada monta de golpe.
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease, delay },
});

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '3+', label: t('about.yearsExp') },
    { value: '20+', label: t('about.projectsCompleted') },
  ];

  return (
    <section id="home" className="relative isolate overflow-hidden pb-20 pt-16 sm:pt-24 lg:min-h-[100dvh] lg:pb-24">
      {/* Luz ambiental cenital: evita el fondo perfectamente plano. */}
      <div aria-hidden className="ambient pointer-events-none absolute inset-x-0 -top-24 h-[70vh]" />

      <div className="shell relative">
        <motion.p className="flex items-center gap-3" {...rise(0.05)}>
          <span aria-hidden className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="eyebrow text-ink-muted">{t('hero.available')}</span>
        </motion.p>

        <div className="mt-10 grid grid-cols-12 items-start gap-y-12 lg:mt-14 lg:gap-x-8">
          <motion.div className="col-span-12 lg:col-span-8" {...rise(0.12)}>
            <h1 className="font-display text-[clamp(2.75rem,7.5vw,6.25rem)] leading-[0.96] tracking-[-0.02em] text-ink-strong">
              {t('hero.title')}
            </h1>
          </motion.div>

          {/* Retrato desplazado y superpuesto: rompe la simetría de dos columnas. */}
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 lg:-mt-10 lg:pl-8"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.25 }}
          >
            <div className="relative w-full max-w-[19rem]">
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full rounded-panel border border-accent"
              />
              <img
                src="/profile.jpg"
                alt="Retrato de Javier Orellana Rápalo"
                width="608"
                height="760"
                className="relative aspect-[4/5] w-full rounded-panel border border-soft object-cover shadow-lift"
              />
            </div>
          </motion.div>

          <motion.div className="col-span-12 lg:col-span-6 lg:col-start-1" {...rise(0.2)}>
            <p className="max-w-prose text-lg leading-relaxed text-ink-muted sm:text-xl">
              {t('hero.description')}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppLink(t('hero.whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t('hero.contact')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#projects" className="btn-ghost">
                {t('hero.viewProjects')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Riel de datos: cifras tabulares, no tarjetas. */}
        <motion.dl
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-faint pt-8 sm:grid-cols-3 lg:mt-24"
          {...rise(0.32)}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="eyebrow">{stat.label}</dt>
              <dd className="tnum mt-3 font-display text-[2.5rem] leading-none text-ink-strong">{stat.value}</dd>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-1">
            <dt className="eyebrow">{t('hero.role')}</dt>
            <dd className="mt-3 font-display text-2xl leading-snug text-ink-strong">
              {t('about.locationTitle')}
            </dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
