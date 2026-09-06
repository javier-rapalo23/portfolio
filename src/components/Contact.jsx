import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../constants';
import SectionHeader from './SectionHeader';

const ease = [0.22, 1, 0.36, 1];

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Contact = () => {
  const { t, language } = useLanguage();

  const contactMethods = [
    {
      label: 'Email',
      value: 'javierorellana2015.jaor@gmail.com',
      href: 'mailto:javierorellana2015.jaor@gmail.com',
      Icon: MailIcon,
    },
    {
      label: language === 'es' ? 'Teléfono' : 'Phone',
      value: '+504 8789 0320',
      href: 'tel:+50487890320',
      Icon: PhoneIcon,
    },
    {
      label: 'GitHub',
      value: 'github.com/javier-rapalo23',
      href: 'https://github.com/javier-rapalo23',
      Icon: GithubIcon,
    },
    {
      label: 'LinkedIn',
      value: 'in/javier-orellana-rapalo23',
      href: 'https://linkedin.com/in/javier-orellana-rapalo23',
      Icon: LinkedinIcon,
    },
  ];

  return (
    <section id="contact" className="relative isolate overflow-hidden py-28 lg:py-40">
      <div aria-hidden className="ambient pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] rotate-180" />

      <div className="shell relative">
        <SectionHeader index="05" label={t('nav.contact')} title={t('contact.title')} />

        <div className="mt-14 grid grid-cols-12 gap-y-14 lg:mt-20 lg:gap-x-8">
          <motion.div
            className="col-span-12 lg:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="font-display text-3xl italic leading-snug text-accent-soft sm:text-4xl">
              {t('contact.subtitle')}
            </p>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
              {t('contact.description')}
            </p>

            <a
              href={getWhatsAppLink(t('hero.whatsappMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 !px-8 !py-4 !text-base"
            >
              {t('contact.whatsappCta')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <p className="eyebrow mt-6">{t('contact.response')}</p>
          </motion.div>

          {/* Los canales van como lista con reglas finas, no como cuatro
              tarjetas: es un directorio, no una comparativa. */}
          <motion.div
            className="col-span-12 lg:col-span-5 lg:col-start-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.12 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex items-baseline gap-4">
              <span className="eyebrow">{t('contact.methodsTitle')}</span>
              <span aria-hidden className="h-px flex-1 bg-[rgba(241,237,231,0.08)]" />
            </div>

            <ul className="mt-2 list-none">
              {contactMethods.map((method) => (
                <li key={method.label}>
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 border-b border-faint py-4 transition-colors duration-200 hover:border-accent"
                  >
                    <span className="shrink-0 text-ink-faint transition-colors duration-200 group-hover:text-accent">
                      <method.Icon />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="eyebrow block">{method.label}</span>
                      <span className="mt-1 block truncate text-sm text-ink-muted transition-colors duration-200 group-hover:text-ink">
                        {method.value}
                      </span>
                    </span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden
                      className="shrink-0 text-ink-ghost transition-all duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
