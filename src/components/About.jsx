import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Desarrollador de software proactivo con experiencia en el ciclo completo de desarrollo 
              de aplicaciones web y móviles. Actualmente trabajando en Intermoda S.A. de C.V., donde 
              diseño soluciones con React, React Native y .NET.
            </p>
            <p>
              Mi enfoque se centra en crear soluciones escalables y de alta calidad, optimizando 
              procesos mediante automatización. He desarrollado Windows Services, APIs REST, y 
              aplicaciones móviles que mejoran la eficiencia operativa.
            </p>
            <p>
              Colaborador, adaptable y comprometido con el aprendizaje continuo. Graduado con 
              excelencia académica en Ingeniería en Sistemas de la Universidad Nacional Autónoma 
              de Honduras.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>2+</h3>
              <p>Años de Experiencia</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Proyectos Completados</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Tecnologías</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
