import React from "react";
import "../css/styles.css";

function Boton({ texto, manejarClick }) {
  return <button onClick={manejarClick}>{texto}</button>;
}

export default Boton;