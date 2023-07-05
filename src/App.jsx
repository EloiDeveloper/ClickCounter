import { useEffect, useState } from "react";
import Boton from "./components/boton.jsx";
import Contador from "./components/contador.jsx";
import logo from "./img/Eloilogo.webp";
import "./App.css";

function App() {
  const [numClicks, setNumClicks] = useState(() => {
    const clicks = localStorage.getItem("clicks");
    return clicks ? parseInt(clicks) : 0;
  });

  useEffect(() => {
    localStorage.setItem("clicks", numClicks.toString());
  }, [numClicks]);

  const sumarContador = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  const sumarNumeroAleatorio = () => {
    const numeroMaximo = 300;
    setNumClicks(numClicks + Math.floor(Math.random() * numeroMaximo));
  };

  return (
    <div className="App">
      <img src={logo} className="logo" alt="Logo" />
      <h1>Dinero</h1>
      <div className="contenido">
        <Contador numClicks={numClicks} />
        <Boton texto="Click" manejarClick={sumarContador} />
        <Boton texto="Sumar aleatoriamente" manejarClick={sumarNumeroAleatorio} />
        <Boton texto="Reiniciar" manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
