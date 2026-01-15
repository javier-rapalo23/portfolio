import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Reemplaza estos valores con tus credenciales de EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Javier',
        },
        publicKey
      );

      alert(t('contact.successMessage'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      alert(t('contact.errorMessage') || 'Error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-8" style={{backgroundColor: '#020617'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-12 bg-gradient-primary bg-clip-text text-transparent font-bold">
          {t('contact.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl mb-4 font-semibold" style={{color: '#E5E7EB'}}>{t('contact.subtitle')}</h3>
            <p className="leading-relaxed mb-8" style={{color: '#94A3B8'}}>
              {t('contact.description')}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4" style={{color: '#E5E7EB'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0" style={{color: '#38BDF8'}}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>javierorellana2015.jaor@gmail.com</span>
              </div>
              <div className="flex items-center gap-4" style={{color: '#E5E7EB'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0" style={{color: '#38BDF8'}}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+504 8789 0320</span>
              </div>
              <div className="flex items-center gap-4" style={{color: '#E5E7EB'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" style={{color: '#38BDF8'}}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <a href="https://github.com/javier-rapalo23" target="_blank" rel="noopener noreferrer" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'} onMouseLeave={(e) => e.currentTarget.style.color = '#E5E7EB'}>
                  github.com/javier-rapalo23
                </a>
              </div>
              <div className="flex items-center gap-4" style={{color: '#E5E7EB'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" style={{color: '#38BDF8'}}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a href="https://linkedin.com/in/javier-orellana-rapalo23" target="_blank" rel="noopener noreferrer" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'} onMouseLeave={(e) => e.currentTarget.style.color = '#E5E7EB'}>
                  linkedin.com/in/javier-orellana-rapalo23
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-8 rounded-xl border" style={{backgroundColor: '#020617', borderColor: 'rgba(56, 189, 248, 0.2)'}}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium" style={{color: '#E5E7EB'}}>
                {t('contact.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-primary-500/30 rounded-lg text-slate-100 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium" style={{color: '#E5E7EB'}}>
                {t('contact.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                style={{backgroundColor: '#0F172A', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#E5E7EB'}}
                onFocus={(e) => e.currentTarget.style.borderColor = '#38BDF8'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)'}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium" style={{color: '#E5E7EB'}}>
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-vertical"
                style={{backgroundColor: '#0F172A', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#E5E7EB'}}
                onFocus={(e) => e.currentTarget.style.borderColor = '#38BDF8'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)'}
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-lg bg-gradient-primary text-white font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? (t('contact.sendingButton') || 'Enviando...') : t('contact.sendButton')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
