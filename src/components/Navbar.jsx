import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useActiveSection, useScrolled } from '../hooks/useActiveSection';

const SECTION_IDS = ['home', 'about', 'experience', 'education', 'projects', 'contact'];

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled(24);

  // Escape cierra el menú móvil; sin esto queda atrapado el foco del teclado.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const navLinks = SECTION_IDS.slice(1, 6).map((id) => ({ id, label: t(`nav.${id}`) }));

  return (
    <header
      className={`sticky top-0 z-nav transition-colors duration-300 ease-editorial ${
        scrolled
          ? 'border-b border-soft bg-[rgba(11,11,12,0.72)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <a
            href="#home"
            className="font-display text-xl leading-none text-ink-strong transition-colors duration-200 hover:text-accent-soft"
          >
            Javier Orellana
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex list-none items-center gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors duration-200 ${
                        isActive ? 'text-ink-strong' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`h-1 w-1 rounded-full transition-all duration-300 ease-editorial ${
                          isActive ? 'scale-100 bg-accent opacity-100' : 'scale-0 opacity-0'
                        }`}
                      />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t('a11y.switchLang')}
              className="rounded-full border border-soft px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink-muted transition-colors duration-200 hover:border-strong hover:text-ink-strong"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <a href="#contact" className="hidden btn-primary !px-5 !py-2 !text-[0.8125rem] sm:inline-flex">
              {t('nav.contact')}
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-surface-high lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="17" x2="15" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.nav
              id="mobile-nav"
              aria-label="Principal móvil"
              className="overflow-hidden lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="list-none border-t border-faint py-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={active === link.id ? 'true' : undefined}
                      className={`flex items-baseline gap-4 py-3 text-base transition-colors duration-200 ${
                        active === link.id ? 'text-ink-strong' : 'text-ink-muted'
                      }`}
                    >
                      <span className="eyebrow tnum">
                        {String(SECTION_IDS.indexOf(link.id)).padStart(2, '0')}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full">
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
