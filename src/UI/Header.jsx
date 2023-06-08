import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${scrollPosition > 50 ? "solid" : ""}`}
      data-aos="fade-down"
    >
      <a href="#main" className="logo">
        Profayra
      </a>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="https://wa.link/vags6s" target="_blank">
          Contacto
        </a>
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
