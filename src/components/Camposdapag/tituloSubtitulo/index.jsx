import React from "react";
import "./index.scss";

const TituloSecao = ({ subtitulo, tituloPrincipal, classe = "" }) => (
  <div className={`estilizacaodotitulo ${classe}`}>
    <p className="subtitulo">{subtitulo}</p>
    <h2 className="titulo-principal">{tituloPrincipal}</h2>
  </div>
);

export default TituloSecao;