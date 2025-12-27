import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hola, soy <span className="gradient-text">Javier Orellana Rápalo</span>
        </h1>
        <h2 className="hero-subtitle">Desarrollador de Software</h2>
        <p className="hero-description">
          Especializado en crear soluciones web y móviles escalables con React, .NET y Node.js. Apasionado por la automatización y la optimización de procesos.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn-secondary">Contacto</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-circle"></div>
      </div>
    </section>
  );
};

export default Hero;
