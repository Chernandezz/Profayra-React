import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" data-aos="fade-down">
      <a href="#main" className="logo">
        Profayra
      </a>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#contacto">Contacto</a>
        <span className="divider">•</span>
        <a href="#proyectos">Proyectos</a>
        <span className="divider">•</span>
        <a href="#about">Sobre Nosotros</a>
      </nav>

      <div id="menu-btn" onClick={handleMenuClick}>
        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </header>
  );
};

export default Header;
