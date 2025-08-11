import React from "react";
import "./index.scss";

const TituloSecao = ({ subtitulo, tituloPrincipal }) => (
  <div className="estilizacaodotitulo">
    <h5 className="subtitulo">{subtitulo}</h5>
    <h2 className="titulo-principal">{tituloPrincipal}</h2>
  </div>
);

export default TituloSecao;
