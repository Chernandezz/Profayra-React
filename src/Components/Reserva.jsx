import React from "react";
import "./Reserva.css";
import logo from "../images/ravage-removebg-preview.webp";

const Reserva = () => {
  return (
    <div className="container home" id="main" data-aos="zoom-out">
      <div className="principal">
        <img src={logo} alt="Profayra Logo" />
        <h3>Monitorias de programación</h3>
        <a
          href="https://calendly.com/profayra/monitoria"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Reservar ahora!
        </a>
      </div>
      <div className="social">
        <a href="https://www.youtube.com/channel/UCeuFbaXgjHxOSGTLaJtkOVA">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="https://www.instagram.com/profayra/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCeuFbaXgjHxOSGTLaJtkOVA">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Reserva;
