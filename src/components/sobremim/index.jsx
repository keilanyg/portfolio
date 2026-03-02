import React from "react";
import "./index.scss";
import Fotodeperfil from "../../assets_optimized/Fotodeperfil.webp";
import documentoPDF from './Currículo-KeilanyGabriel.pdf';
import IconeUnicons from "../Camposdapag/icones/index";
import Hero from "../../assets_optimized/Hero.webp"

const SobreMim = () => {
  return (
    <div>
      <div className="hero-container">
        <img
          src={Hero}
          alt="Keilany com tablet"
          loading="lazy"
          className="mx-auto w-[380px] md:w-[500px] lg:w-[550px]"
        />
      </div>

      <section className="sobre-mim" id="sobre">
        <div className="foto-container">
          <div>
            <img
              src={Fotodeperfil}
              alt="Keilany com tablet"
              className="foto-perfil"
              loading="lazy"
              style={{ width: "90%", maxWidth: "230px", height: "auto" }}
            />
          </div>
        </div>

        <div className="descricao">
          <div>
            <p>
              Sou Keilany, desenvolvedora Front-end com ênfase em UX/UI Design, focada na criação de interfaces acessíveis e inclusivas.
              Experiência em desenvolvimento de soluções web, otimização de fluxos e melhoria da experiência do usuário.
              Conhecimento em acessibilidade digital, usabilidade, análise de dados, documentação técnica e modelagem de
              requisitos.
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap items-center mb-4 gap-y-2 gap-x-6 sm:gap-x-8 list-none hover:text-[#000] focus:text-[#000]">
              <li>
                <a
                  href="https://github.com/keilanyg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <IconeUnicons iconClass="uil uil-github" tamanho="18px sm:20px" cor="#ffffff" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/keilany-g-900981250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconeUnicons iconClass="uil uil-linkedin" tamanho="18px sm:20px" cor="#ffffff" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/keilanygabriell"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <IconeUnicons iconClass="uil uil-instagram" tamanho="18px sm:20px" cor="#ffffff" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:keilanydes@gmail.com"
                  aria-label="Email"
                >
                  <IconeUnicons iconClass="uil uil-envelope" tamanho="18px sm:20px" cor="#ffffff" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href={documentoPDF} className="botao-curriculo" target="_blank" rel="noopener noreferrer">
              Currículo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMim;
