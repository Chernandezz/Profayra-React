import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`header ${menuOpen ? "menu-open" : ""}`}
      data-aos="fade-down"
    >
      <a href="#main" className="logo">
        Profayra
      </a>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#contacto">Contacto</a>
        <span className="divider">•</span>
        <a href="#proyectos">Proyectos</a>
        <span className="divider">•</span>
        <a href="#about">Sobre Nosotros</a>
      </nav>

      <div
        id="menu-btn"
        className={`fas fa-bars ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Header;
