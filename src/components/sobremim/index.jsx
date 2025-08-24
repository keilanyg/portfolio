import React from "react";
import "./index.scss";
import fotoPerfil from "../../assets_optimized/fotoPerfil.webp";
import TituloSecao from "../Camposdapag/tituloSubtitulo/index";
import documentoPDF from './documento.pdf';

const SobreMim = () => {
  return (
    <div>
      <h1 className="text-[#e05500] font-bold mb-5 text-center text-xl sm:text-1xl md:text-2xl lg:text-3xl leading-snug px-4 sm:px-6 md:px-0">
        Meu Trabalho em UX, UI Design e Desenvolvimento de Soluções Digitais
      </h1>

      <TituloSecao tituloPrincipal="Sobre mim" />

      <section className="sobre-mim" id="sobre">

        <div className="foto-container">
          <div className="imagem-wrapper">
            <img src={fotoPerfil} alt="Keilany com tablet" className="foto-perfil" loading="lazy" />
          </div>
        </div>

        <div className="descricao">
          <p>
            Sou Keilany desenvolvedora front-end com ênfase em UX/UI Design,
            dedicada concepção e desenvolvimento de interfaces. Possuo experiência prática
            adquirida durante a graduação. E uma vivência profissional significativa.
          </p>
          <p>
            Tenho me dedicado no estudo da criação de plataformas digitais acessíveis e
            inclusivas, garantindo uma experiência positiva para pessoas com diversas
            deficiências e habilidades. Nesse cenário, venho expandindo meus conhecimentos
            em acessibilidade, design e usabilidade. Esse processo tem sido
            essencial para meu desenvolvimento e fortalecimento de habilidades relevantes
            focados na inclusão.
          </p>
          <a href={documentoPDF} className="botao-curriculo" target="_blank" rel="noopener noreferrer">
            Currículo
          </a>
        </div>
      </section>
    </div>
  );
};

export default SobreMim;
