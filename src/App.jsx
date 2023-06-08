import { useState } from "react";
import Header from "./UI/Header";
import Reserva from "./Components/Reserva";
import Proyectos from "./Components/Proyectos";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Reserva />
      <Proyectos />
    </>
  );
}

export default App;
