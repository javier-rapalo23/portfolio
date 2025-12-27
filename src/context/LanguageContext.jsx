import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Desarrollador de Software',
      description: 'Especializado en crear soluciones web y móviles escalables con React, .NET y Node.js. Apasionado por la automatización y la optimización de procesos.',
      viewProjects: 'Ver Proyectos',
      contact: 'Contacto',
    },
    about: {
      title: 'Sobre Mí',
      p1: 'Desarrollador de software proactivo con experiencia en el ciclo completo de desarrollo de aplicaciones web y móviles. Actualmente trabajando en Intermoda S.A. de C.V., donde diseño soluciones con React, React Native y .NET.',
      p2: 'Mi enfoque se centra en crear soluciones escalables y de alta calidad, optimizando procesos mediante automatización. He desarrollado Windows Services, APIs REST, y aplicaciones móviles que mejoran la eficiencia operativa.',
      p3: 'Colaborador, adaptable y comprometido con el aprendizaje continuo. Graduado con excelencia académica en Ingeniería en Sistemas de la Universidad Nacional Autónoma de Honduras.',
      yearsExp: 'Años de Experiencia',
      projectsCompleted: 'Proyectos Completados',
      technologies: 'Tecnologías',
    },
    projects: {
      title: 'Proyectos',
      github: 'GitHub',
      demo: 'Demo',
      project1: {
        title: 'Encomienda Logistics System',
        description: 'Sistema completo de gestión logística para envíos, inventarios, clientes y seguimiento. Incluye frontend modular en React, backend en Node.js/Express y despliegue en Linux con Nginx y PM2.',
      },
      project2: {
        title: 'Vi-ERP',
        description: 'Sistema ERP full-stack con módulos de inventario, gestión de productos, usuarios con roles y flujo de pedidos. Arquitectura limpia con componentes modulares y APIs REST.',
      },
      project3: {
        title: 'Finmaster',
        description: 'Aplicación web para gestión de formularios financieros con manejo avanzado de estado, validaciones y componentes reutilizables. Arquitectura frontend sólida.',
      },
      project4: {
        title: 'Tienda Vicky',
        description: 'Aplicación web para gestión de una tienda en línea con listado de productos y carrito de compras.',
      },
    },
    skills: {
      title: 'Habilidades',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database & DevOps',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¡Trabajemos juntos!',
      description: 'Desarrollador de software en San Pedro Sula, Honduras. Disponible para colaboraciones y nuevas oportunidades.',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      sendButton: 'Enviar Mensaje',
      successMessage: '¡Mensaje enviado! (Esta es una demo)',
    },
    footer: {
      text: 'Desarrollador de Software en Honduras 🇭🇳',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Software Developer',
      description: 'Specialized in building scalable web and mobile solutions with React, .NET and Node.js. Passionate about automation and process optimization.',
      viewProjects: 'View Projects',
      contact: 'Contact',
    },
    about: {
      title: 'About Me',
      p1: 'Proactive software developer with experience in the full development cycle of web and mobile applications. Currently working at Intermoda S.A. de C.V., where I design solutions with React, React Native and .NET.',
      p2: 'My focus is on creating scalable, high-quality solutions, optimizing processes through automation. I have developed Windows Services, REST APIs, and mobile applications that improve operational efficiency.',
      p3: 'Collaborative, adaptable and committed to continuous learning. Graduated with academic excellence in Systems Engineering from Universidad Nacional Autónoma de Honduras.',
      yearsExp: 'Years of Experience',
      projectsCompleted: 'Projects Completed',
      technologies: 'Technologies',
    },
    projects: {
      title: 'Projects',
      github: 'GitHub',
      demo: 'Demo',
      project1: {
        title: 'Encomienda Logistics System',
        description: 'Complete logistics management system for shipments, inventories, customers and tracking. Includes modular frontend in React, backend in Node.js/Express and Linux deployment with Nginx and PM2.',
      },
      project2: {
        title: 'Vi-ERP',
        description: 'Full-stack ERP system with inventory modules, product management, role-based users and order flow. Clean architecture with modular components and REST APIs.',
      },
      project3: {
        title: 'Finmaster',
        description: 'Web application for financial form management with advanced state management, validations and reusable components. Solid frontend architecture.',
      },
      project4: {
        title: 'Tienda Vicky',
        description: 'Web application for managing an online store with product listings and shopping cart.',
      },
    },
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database & DevOps',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s work together!',
      description: 'Software developer in San Pedro Sula, Honduras. Available for collaborations and new opportunities.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButton: 'Send Message',
      successMessage: 'Message sent! (This is a demo)',
    },
    footer: {
      text: 'Software Developer in Honduras 🇭🇳',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
