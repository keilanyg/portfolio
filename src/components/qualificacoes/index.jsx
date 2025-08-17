import React from "react";
import "./index.scss";
import TituloSecao from "../Camposdapag/tituloSubtitulo/index";
import IconeUnicons from "../Camposdapag/icones/index";


const Qualificacoes = () => {
  return (
    <section className="qualificacoes" id="jornada" >
      <TituloSecao subtitulo="Minha Jornada" tituloPrincipal="Qualificações" />
      <div className="conteudo">
        <div className="item">
          <h3>
            <span role="img" aria-label="Formação Acadêmica">
              <IconeUnicons iconClass="uil uil-graduation-cap" />
            </span> Formação Acadêmica
          </h3>
          <div className="detalhes">
            <div className="circulo"></div>
            <div className="linha-vertical"></div>
            <div className="texto">
              <h4>Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN)</h4>
              <p className="descricao">Tecnóloga em Análise e Desenvolvimento de Sistemas</p>
              <p className="periodo">
                <span role="img" aria-label="Calendário">
                  <IconeUnicons iconClass="uil uil-calendar-alt" />
                </span> 2021 - 2025
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <h3>
            <span role="img" aria-label="Experiência">
              <IconeUnicons iconClass="uil uil-uil uil-folder-open	" />
            </span> Experiência
          </h3>
          <div className="detalhes">
            <div className="circulo"></div>
            <div className="linha-vertical"></div>
            <div className="texto">
              <h4>Plataforma de Streaming - Tela Brasil</h4>
              <p className="descricao">UX/UI Designer</p>
              <p className="periodo">
                <span role="img" aria-label="Calendário">
                  <IconeUnicons iconClass="uil uil-calendar-alt" />
                </span> 2024 - 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualificacoes;
