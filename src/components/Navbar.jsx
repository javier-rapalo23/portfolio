import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h2 className="navbar-logo">Portfolio</h2>
        <ul className="navbar-menu">
          <li><a onClick={() => scrollToSection('home')}>Inicio</a></li>
          <li><a onClick={() => scrollToSection('about')}>Sobre mí</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Proyectos</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Habilidades</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
