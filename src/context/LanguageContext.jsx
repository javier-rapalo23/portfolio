import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      education: 'Educación',
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
    experience: {
      title: 'Experiencia',
      achievements: 'Logros principales',
      exp1: {
        role: 'Desarrollador de Software',
        company: 'Intermoda S.A. de C.V.',
        location: 'San Pedro Sula, Honduras',
        period: 'Sep 2024 – Presente',
        achievement1: 'Diseñé y desarrollé soluciones web y móviles utilizando React Native y React, mejorando la eficiencia operativa interna',
        achievement2: 'Creé Windows Services en C# que automatizan completamente el procesamiento de datos, envío de correos y sincronización de bases de datos',
        achievement3: 'Construí y mantuve APIs REST para la integración entre múltiples plataformas internas, aumentando la interoperabilidad del sistema',
        achievement4: 'Realicé despliegues y configuración de aplicaciones web en servidores Linux (Nginx, PM2, systemd)',
        achievement5: 'Implementé middlewares para autenticación, validación de solicitudes y registro de actividad en servicios .NET y Node.js',
        achievement6: 'Desarrollé software para replicación y sincronización automatizada de bases de datos en entornos distribuidos',
        achievement7: 'Construí una aplicación móvil en React Native para gestión de pedidos, recibos y funcionalidades CRM utilizada por personal de campo',
      },
      exp2: {
        role: 'Desarrollador de Software',
        company: 'Koala Outsourcing',
        location: 'San Pedro Sula, Honduras',
        period: 'Oct 2023 – Sep 2024',
        achievement1: 'Desarrollé módulos empresariales usando C#, JavaScript, arquitectura MVC y Entity Framework',
        achievement2: 'Implementé funcionalidades contables y administrativas para sistemas de gestión académica',
        achievement3: 'Diseñé y consumí APIs REST; administré bases de datos PostgreSQL y SQL Server',
        achievement4: 'Colaboré mediante GitHub para control de versiones y aseguramiento de calidad',
      },
      exp3: {
        role: 'Desarrollador de Software (Pasantía)',
        company: 'Cooperativa CACEENP LTDA',
        location: 'San Pedro Sula, Honduras',
        period: 'May 2023 – Jul 2023',
        achievement1: 'Desarrollé aplicaciones financieras utilizando Oracle APEX y PL/SQL',
        achievement2: 'Di mantenimiento y mejoras a funcionalidades clave bancarias',
        achievement3: 'Optimicé la experiencia de usuario mediante mejoras en la interfaz y flujos internos',
      },
    },
    education: {
      title: 'Educación',
      highlights: 'Logros destacados',
      edu1: {
        degree: 'Ingeniería en Sistemas',
        institution: 'Universidad Nacional Autónoma de Honduras (UNAH)',
        location: 'San Pedro Sula, Honduras',
        period: '2019 – 2023',
        highlight1: 'Graduado con excelencia académica',
        highlight2: 'Sólida formación en desarrollo de software, estructuras de datos, algoritmos y bases de datos',
      },
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
      project5: {
        title: 'FreshControl Web',
        description: 'Aplicación web para la gestión de inventarios, ventas y desperdicios en una Frutería y Verdulería.',
      },
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y herramientas',
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
      text: 'Desarrollador de Software',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
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
    experience: {
      title: 'Experience',
      achievements: 'Key Achievements',
      exp1: {
        role: 'Software Developer',
        company: 'Intermoda S.A. de C.V.',
        location: 'San Pedro Sula, Honduras',
        period: 'Sep 2024 – Present',
        achievement1: 'Designed and developed web and mobile solutions using React Native and React, improving internal operational efficiency',
        achievement2: 'Created Windows Services in C# that fully automate data processing, email sending, and database synchronization',
        achievement3: 'Built and maintained REST APIs for integration between multiple internal platforms, increasing system interoperability',
        achievement4: 'Performed deployments and configuration of web applications on Linux servers (Nginx, PM2, systemd)',
        achievement5: 'Implemented middlewares for authentication, request validation, and activity logging in .NET and Node.js services',
        achievement6: 'Developed software for automated database replication and synchronization in distributed environments',
        achievement7: 'Built a React Native mobile application for order management, receipts, and CRM functionalities used by field personnel',
      },
      exp2: {
        role: 'Software Developer',
        company: 'Koala Outsourcing',
        location: 'San Pedro Sula, Honduras',
        period: 'Oct 2023 – Sep 2024',
        achievement1: 'Developed enterprise modules using C#, JavaScript, MVC architecture, and Entity Framework',
        achievement2: 'Implemented accounting and administrative functionalities for academic management systems',
        achievement3: 'Designed and consumed REST APIs; managed PostgreSQL and SQL Server databases',
        achievement4: 'Collaborated through GitHub for version control and quality assurance',
      },
      exp3: {
        role: 'Software Developer (Internship)',
        company: 'Cooperativa CACEENP LTDA',
        location: 'San Pedro Sula, Honduras',
        period: 'May 2023 – Jul 2023',
        achievement1: 'Developed financial applications using Oracle APEX and PL/SQL',
        achievement2: 'Maintained and improved key banking functionalities',
        achievement3: 'Optimized user experience through interface improvements and internal workflows',
      },
    },
    education: {
      title: 'Education',
      highlights: 'Key Highlights',
      edu1: {
        degree: 'Systems Engineering',
        institution: 'Universidad Nacional Autónoma de Honduras (UNAH)',
        location: 'San Pedro Sula, Honduras',
        period: '2019 – 2025',
        highlight1: 'Graduated with academic excellence',
        highlight2: 'Strong foundation in software development, data structures, algorithms, and databases',
      },
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
      project5: {
        title: 'FreshControl Web',
        description: 'Web application for managing inventory, sales and wastes in Fruit and Vegetable Store .',
      },
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools',
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
      text: 'Software Developer',
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
