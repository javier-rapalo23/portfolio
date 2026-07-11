import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../constants';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      label: 'Email',
      value: 'javierorellana2015.jaor@gmail.com',
      href: 'mailto:javierorellana2015.jaor@gmail.com',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      label: 'Teléfono',
      value: '+504 8789 0320',
      href: 'tel:+50487890320',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'github.com/javier-rapalo23',
      href: 'https://github.com/javier-rapalo23',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/javier-orellana-rapalo23',
      href: 'https://linkedin.com/in/javier-orellana-rapalo23',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-32 lg:py-48 px-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.05)'}}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-3 text-white">
            {t('contact.title')}
          </h2>
          <p className="text-xl font-semibold mb-4" style={{color: '#0070F3'}}>
            {t('contact.subtitle')}
          </p>
          <p className="leading-relaxed mb-10 text-lg" style={{color: '#a1a1aa'}}>
            {t('contact.description')}
          </p>
          <a
            href={getWhatsAppLink(t('hero.whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-semibold transition-colors duration-200 mb-14"
            style={{backgroundColor: '#0070F3', color: '#ffffff'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#338eff'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0070F3'}
          >
            {t('contact.whatsappCta')}
          </a>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 rounded-[20px] border transition-colors duration-300"
              style={{backgroundColor: '#121212', borderColor: 'rgba(255, 255, 255, 0.08)', color: '#ffffff'}}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <span style={{color: '#0070F3'}}>{method.icon}</span>
              <span className="min-w-0">
                <span className="block text-xs mb-0.5" style={{color: '#8f8f8f'}}>{method.label}</span>
                <span className="block truncate text-sm font-medium">{method.value}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
