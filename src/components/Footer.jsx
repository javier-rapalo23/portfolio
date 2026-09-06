import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-soft py-14">
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 sm:col-span-7">
            <p className="font-display text-2xl leading-none text-ink-strong">
              Javier Orellana Rápalo
            </p>
            <p className="mt-3 text-sm text-ink-muted">{t('footer.text')}</p>
          </div>

          <div className="col-span-12 flex flex-col gap-4 sm:col-span-5 sm:items-end">
            <a href="#home" className="link-underline text-sm font-semibold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
              {t('footer.top')}
            </a>
            <p className="eyebrow sm:text-right">{t('footer.built')}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-faint pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow tnum">© {year} Javier Orellana Rápalo</p>
          <p className="eyebrow">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
