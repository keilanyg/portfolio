import React from "react";
import "./index.scss";

const TituloSecao = ({ subtitulo, tituloPrincipal }) => (
  <div className="estilizacaodotitulo">
    <p className="subtitulo">{subtitulo}</p>
    <h2 className="titulo-principal">{tituloPrincipal}</h2>
  </div>
);

export default TituloSecao;
