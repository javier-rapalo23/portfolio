import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Servicios',
      experience: 'Experiencia',
      education: 'Educación',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Desarrollo de Software · Honduras 🇭🇳',
      title: 'Software a medida que hace crecer tu negocio.',
      description: 'Diseño y desarrollo plataformas web y móviles rápidas, seguras y escalables para empresas en Honduras. De la idea al producto en producción.',
      viewProjects: 'Ver Proyectos',
      contact: 'Iniciar un Proyecto',
      whatsappMessage: 'Hola Javier, quiero cotizar una solución de software para mi negocio.',
    },
    about: {
      title: 'Servicios',
      subtitle: 'Qué puedo hacer por tu negocio',
      serviceTitle: 'Desarrollo de software a medida',
      serviceDescription: 'Diseño y construyo plataformas web, aplicaciones móviles y automatizaciones que optimizan operaciones y aceleran el crecimiento de tu negocio. Del análisis a la puesta en producción.',
      serviceTag1: 'Apps Web',
      serviceTag2: 'Apps Móviles',
      serviceTag3: 'Automatización',
      stackTitle: 'Stack Tecnológico',
      locationTitle: 'Honduras 🇭🇳 · Remoto',
      locationDescription: 'Disponible para nuevos proyectos',
      yearsExp: 'Años de Experiencia',
      projectsCompleted: 'Proyectos Completados',
    },
    experience: {
      title: 'Experiencia',
      achievements: 'Logros principales',
      exp1: {
        role: 'Desarrollador de Software Principal y Gerente de Operaciones',
        company: 'Centro de Reciclaje Santa Cruz',
        location: 'Santa Cruz de Yojoa, Honduras',
        period: 'Mar 2026 - Presente',
        achievement1: 'Lideré la arquitectura y el desarrollo de extremo a extremo de un ecosistema multiplataforma (Web y Móvil) para optimizar el control de inventario de reciclaje, el registro de compras y la logística de cargamentos.',
        achievement2: 'Diseñé e implementé un módulo integral de planillas y pago a proveedores, garantizando la seguridad y agilizando las transacciones financieras con los vendedores de material.',
        achievement3: 'Dirigí y gestioné las operaciones del personal en planta, supervisando los flujos de trabajo diarios, la coordinación del equipo y el manejo del flujo de caja para la adquisición de materiales.',
      },
      exp2: {
        role: 'Desarrollador de Software',
        company: 'Intermoda S.A. de C.V.',
        location: 'San Pedro Sula, Honduras',
        period: 'Sep 2024 – Feb 2026',
        achievement1: 'Diseñé y desarrollé soluciones web y móviles utilizando React Native y React, mejorando la eficiencia operativa interna',
        achievement2: 'Creé Windows Services en C# que automatizan completamente el procesamiento de datos, envío de correos y sincronización de bases de datos',
        achievement3: 'Construí y mantuve APIs REST para la integración entre múltiples plataformas internas, aumentando la interoperabilidad del sistema',
        achievement4: 'Realicé despliegues y configuración de aplicaciones web en servidores Linux (Nginx, PM2, systemd)',
        achievement5: 'Implementé middlewares para autenticación, validación de solicitudes y registro de actividad en servicios .NET y Node.js',
        achievement6: 'Desarrollé software para replicación y sincronización automatizada de bases de datos en entornos distribuidos',
        achievement7: 'Construí una aplicación móvil en React Native para gestión de pedidos, recibos y funcionalidades CRM utilizada por personal de campo',
      },
      exp3: {
        role: 'Desarrollador de Software',
        company: 'Koala Outsourcing',
        location: 'San Pedro Sula, Honduras',
        period: 'Oct 2023 – Sep 2024',
        achievement1: 'Desarrollé módulos empresariales usando C#, JavaScript, arquitectura MVC y Entity Framework',
        achievement2: 'Implementé funcionalidades contables y administrativas para sistemas de gestión académica',
        achievement3: 'Diseñé y consumí APIs REST; administré bases de datos PostgreSQL y SQL Server',
        achievement4: 'Colaboré mediante GitHub para control de versiones y aseguramiento de calidad',
      },
      exp4: {
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
        title: 'Vixo',
        description: 'Sistema ERP full-stack con módulos de inventario, gestión de productos, usuarios con roles y flujo de pedidos. Arquitectura limpia con componentes modulares y APIs REST.',
      },
      project3: {
        title: 'Finmaster',
        description: 'Aplicación móvil para gestión de formularios financieros con manejo avanzado de estado, validaciones y componentes reutilizables. Arquitectura frontend sólida.',
      },
      project4: {
        title: 'R-Control Web',
        description: 'Plataforma web administrativa y panel de analíticas desarrollado con React y Node.js. Permite al propietario monitorear inventarios de reciclaje en tiempo real, registrar datos de compras y ventas a gran escala, gestionar módulos de planilla y optimizar la logística de despacho para los cargamentos salientes.',
      },
      project5: {
        title: 'FreshControl Web',
        description: 'Aplicación web para la gestión de inventarios, ventas y desperdicios en una Frutería y Verdulería.',
      },
      project6: {
        title: 'R-Control App',
        description: 'Aplicación móvil para gestión de inventarios, seguimiento de compras y ventas, y funcionalidades CRM para un negocio de reciclaje. Construida con React Native y TypeScript, cuenta con una interfaz amigable y un manejo robusto del estado para optimizar la eficiencia operativa.',
      },
    },
    contact: {
      title: '¿Tienes una idea en mente o necesitas digitalizar tu empresa?',
      subtitle: 'Hagámoslo realidad.',
      description: 'Cuéntame sobre tu proyecto y te responderé en menos de 24 horas.',
      whatsappCta: 'Hablemos por WhatsApp',
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
      about: 'Services',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Software Development · Honduras 🇭🇳',
      title: 'Custom software that grows your business.',
      description: 'I design and build fast, secure and scalable web and mobile platforms for businesses in Honduras. From idea to production.',
      viewProjects: 'View Projects',
      contact: 'Start a Project',
      whatsappMessage: 'Hi Javier, I would like to get a quote for a software solution for my business.',
    },
    about: {
      title: 'Services',
      subtitle: 'What I can do for your business',
      serviceTitle: 'Custom software development',
      serviceDescription: 'I design and build web platforms, mobile apps and automations that streamline operations and accelerate your business growth. From analysis to production.',
      serviceTag1: 'Web Apps',
      serviceTag2: 'Mobile Apps',
      serviceTag3: 'Automation',
      stackTitle: 'Tech Stack',
      locationTitle: 'Honduras 🇭🇳 · Remote',
      locationDescription: 'Available for new projects',
      yearsExp: 'Years of Experience',
      projectsCompleted: 'Projects Completed',
    },
    experience: {
      title: 'Experience',
      achievements: 'Key Achievements',
      exp1: {
        role: 'Lead Software Developer & Operations Manager',
        company: 'Centro de Reciclaje Santa Cruz',
        location: 'Santa Cruz de Yojoa, Honduras',
        period: 'Mar 2026 - Present',
        achievement1: 'Spearheaded the end-to-end architecture and development of a dual-platform ecosystem (Web & Mobile CLI) to streamline recycling inventory, purchase tracking, and supply chain logistics.',
        achievement2: 'Designed and implemented a comprehensive payroll and provider payment module, securing and accelerating financial transactions for material suppliers.',
        achievement3: 'Led and managed yard personnel operations, overseeing daily workflows, staff coordination, and cash flow management for material acquisitions.',
      },
      exp2: {
        role: 'Software Developer',
        company: 'Intermoda S.A. de C.V.',
        location: 'San Pedro Sula, Honduras',
        period: 'Sep 2024 – Feb 2026',
        achievement1: 'Designed and developed web and mobile solutions using React Native and React, improving internal operational efficiency',
        achievement2: 'Created Windows Services in C# that fully automate data processing, email sending, and database synchronization',
        achievement3: 'Built and maintained REST APIs for integration between multiple internal platforms, increasing system interoperability',
        achievement4: 'Performed deployments and configuration of web applications on Linux servers (Nginx, PM2, systemd)',
        achievement5: 'Implemented middlewares for authentication, request validation, and activity logging in .NET and Node.js services',
        achievement6: 'Developed software for automated database replication and synchronization in distributed environments',
        achievement7: 'Built a React Native mobile application for order management, receipts, and CRM functionalities used by field personnel',
      },
      exp3: {
        role: 'Software Developer',
        company: 'Koala Outsourcing',
        location: 'San Pedro Sula, Honduras',
        period: 'Oct 2023 – Sep 2024',
        achievement1: 'Developed enterprise modules using C#, JavaScript, MVC architecture, and Entity Framework',
        achievement2: 'Implemented accounting and administrative functionalities for academic management systems',
        achievement3: 'Designed and consumed REST APIs; managed PostgreSQL and SQL Server databases',
        achievement4: 'Collaborated through GitHub for version control and quality assurance',
      },
      exp4: {
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
        title: 'Vixo',
        description: 'Full-stack ERP system with inventory modules, product management, role-based users and order flow. Clean architecture with modular components and REST APIs.',
      },
      project3: {
        title: 'Finmaster',
        description: 'Mobile application for financial form management with advanced state management, validations and reusable components. Solid frontend architecture.',
      },
      project4: {
        title: 'R-Control Web',
        description: 'A comprehensive back-office web platform and analytics dashboard built with React and Node.js. It enables business owners to monitor real-time recycling inventory, track high-volume purchase and sales data, manage payroll modules, and optimize supply chain logistics for outbound cargo shipments.',
      },
      project5: {
        title: 'FreshControl Web',
        description: 'Web application for managing inventory, sales and wastes in Fruit and Vegetable Store .',
      },
      project6: {
        title: 'R-Control App',
        description: 'Mobile application for inventory management, purchase and sales tracking, and CRM functionalities for a recycling business. Built with React Native and TypeScript, it features a user-friendly interface and robust state management to optimize operational efficiency.',
      },
    },
    contact: {
      title: 'Have an idea in mind or need to digitize your business?',
      subtitle: 'Let\'s make it happen.',
      description: 'Tell me about your project and I\'ll get back to you in less than 24 hours.',
      whatsappCta: 'Let\'s talk on WhatsApp',
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
