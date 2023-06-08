import React from "react";
import "./Proyectos.css";
import Card from "./Card";
import AventuraTImage from "../images/AventuraT.webp";
import EfectoParalaxImage from "../images/Efecto Paralax.webp";
import TiendaDeCafeImage from "../images/Tienda de cafe.webp";
import BlogDelCafeImage from "../images/Blog del cafe.webp";
import RockEdmImage from "../images/Rock EDM.webp";
import MascotasImage from "../images/Mascotas.webp";
import TheMovie from "../images/The Movie.webp";
import Profayra from "../images/profayra.webp";
import algoritmoGeneticoImage from "../images/algoritmoGenetico.webp";
import ChatBotImage from "../images/chatBot.webp";
import FibonacciImage from "../images/Fibonacci.webp";

const listaProyectos = [
  {
    link: "https://aventurat.herokuapp.com/",
    img: AventuraTImage,
    alt: "AventuraT",
    titulo: "AventuraT",
    tecnologias: ["HTML", "PHP", "MYSQL", "CSS", "JavaScript"],
  },
  {
    link: "https://trabajo-final-kekh.vercel.app/",
    img: TheMovie,
    alt: "TheMovie",
    titulo: "Peliculas",
    tecnologias: ["React", "GitHub", "CSS"],
  },
  {
    link: "https://algortimogeneticocristianhernandez.netlify.app/",
    img: algoritmoGeneticoImage,
    alt: "Algoritmo Genetico",
    titulo: "Algoritmo Genetico",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "https://efectoparalaxnoche-ch.netlify.app/",
    img: EfectoParalaxImage,
    alt: "Efecto Paralax",
    titulo: "Efecto Paralax",
    tecnologias: ["HTML", "CSS"],
  },
  {
    link: "https://coffe-shop-ch.netlify.app/",
    img: TiendaDeCafeImage,
    alt: "Tienda De Cafe",
    titulo: "Tienda De Cafe",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "https://blogdecafe-ch.netlify.app/",
    img: BlogDelCafeImage,
    alt: "Blog Del Cafe",
    titulo: "Blog Del Cafe",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "https://profayra.com/",
    img: Profayra,
    alt: "Profayra",
    titulo: "Profayra",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "https://glittering-moonbeam-4893f4.netlify.app/",
    img: RockEdmImage,
    alt: "Rock & EDM",
    titulo: "Rock & EDM",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "https://cristron.netlify.app/",
    img: ChatBotImage,
    alt: "ChatBot",
    titulo: "ChatBot",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "https://tienda-de-mascotas-chernandezz.netlify.app/",
    img: MascotasImage,
    alt: "Mascotas",
    titulo: "Mascotas",
    tecnologias: ["HTML", "CSS"],
  },
  {
    link: "https://proyectofibonacci.netlify.app/",
    img: FibonacciImage,
    alt: "Fibonacci",
    titulo: "Fibonacci",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
];

const Proyectos = () => {
  return (
    <div className="proyectos">
      <div className="separatorAndHeader">
        <h2 className="heading" id="proyectos">
          Proyectos
        </h2>
      </div>
      <ul className="cards">
        {listaProyectos.map((proyecto) => (
          <Card
            key={proyecto.link}
            link={proyecto.link}
            img={proyecto.img}
            alt={proyecto.alt}
            titulo={proyecto.titulo}
            tecnologias={proyecto.tecnologias}
          />
        ))}
      </ul>
    </div>
  );
};

export default Proyectos;
