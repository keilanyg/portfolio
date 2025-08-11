import React from "react";
import "./index.scss";
import fotoPerfil from "../../assets/fotoPerfil.png";

const SobreMim = () => {
  return (
    <section className="sobre-mim" id="sobre">
      <div className="foto-container">
        <div className="fundo-laranja" />
        <div className="imagem-wrapper">
          <img src={fotoPerfil} alt="Keilany com tablet" className="foto-perfil" />
        </div>
      </div>

      <div className="descricao">
        <p>
          Sou Keilany desenvolvedora front-end com ênfase em UX/UI Design,
          dedicada concepção e desenvolvimento de interfaces. Graduada em Análise
          e Desenvolvimento de Sistemas. Possuo experiência prática adquirida
          durante a graduação. Uma vivência profissional significativa.
        </p>
        <p>
          Tenho me dedicado no estudo da criação de plataformas digitais acessíveis e
          inclusivas, garantindo uma experiência positiva para pessoas com diversas
          deficiências e habilidades. Nesse cenário, venho expandindo meus conhecimentos
          em acessibilidade digital, design universal e usabilidade. Esse processo tem sido
          essencial para meu desenvolvimento e fortalecimento de habilidades relevantes
          focados na inclusão.
        </p>
        <button className="botao-curriculo">CURRÍCULO</button>
      </div>
    </section>
  );
};

export default SobreMim;
