import React from "react";
import "./index.scss";
import Fotodeperfil from "../../assets_optimized/slide3.webp";
import documentoPDF from './Currículo-Keilany Gabriel.pdf';
import IconeUnicons from "../Camposdapag/icones/index";
import Hero from "../../assets_optimized/backtop.webp";
import Sobre from "../../assets_optimized/backsobremim.webp"

const SobreMim = () => {
  return (
    <div>
      <div className="hero-container w-full overflow-hidden">
        <img
          src={Hero}
          alt="Keilany com tablet"
          loading="lazy"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <section
        className="sobre-mim scroll-mt-24 relative bg-cover bg-top bg-no-repeat w-full min-h-[70vh]"
        id="sobre"
        style={{
          backgroundImage: `url(${Sobre})`,
        }}
      >
        <div className="foto-container">
          <div>
            <img
              src={Fotodeperfil}
              alt="Keilany com tablet"
              className="foto-perfil rounded-3xl"
              loading="lazy"
              style={{
                width: "90%",
                maxWidth: "230px",
                height: "auto",
              }}
            />
          </div>
        </div>

        <div className="descricao text-[#1f2937]">
          <div>
            <p
              style={{ fontFamily: "'Parisienne', cursive" }}
              className="
    text-[#1f2937]
    text-[34px]
    sm:text-[35px]
    leading-none
    text-start
    font-normal
  "
            >
              Keilany Gabriel
            </p>
            <p className="leading-7 text-[#1f2937] text-[15px] text-start sm:text-base font-medium">
              Desenvolvedora Front-end com ênfase em UX/UI Design,
              focada na criação de interfaces acessíveis e inclusivas.
              Experiência em desenvolvimento de soluções web, otimização de fluxos
              e melhoria da experiência do usuário. Conhecimento em acessibilidade
              digital, usabilidade, análise de dados, documentação técnica e
              modelagem de requisitos.
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-6 sm:gap-x-8 list-none">
              <li>
                <a
                  href="https://github.com/keilanyg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[#1f2937] hover:text-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a] rounded transition-colors"
                >
                  <IconeUnicons
                    iconClass="uil uil-github"
                    tamanho="18px sm:20px"
                    cor="currentColor"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/in/keilany-g-900981250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#1f2937] hover:text-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a] rounded transition-colors"
                >
                  <IconeUnicons
                    iconClass="uil uil-linkedin"
                    tamanho="18px sm:20px"
                    cor="currentColor"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/keilanygabriell"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#1f2937] hover:text-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a] rounded transition-colors"
                >
                  <IconeUnicons
                    iconClass="uil uil-instagram"
                    tamanho="18px sm:20px"
                    cor="currentColor"
                  />
                </a>
              </li>

              <li>
                <a
                  href="mailto:keilanydes@gmail.com"
                  aria-label="Email"
                  className="text-[#1f2937] hover:text-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a] rounded transition-colors"
                >
                  <IconeUnicons
                    iconClass="uil uil-envelope"
                    tamanho="18px sm:20px"
                    cor="currentColor"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-3">
            <a
              href={documentoPDF}
              className="botao-curriculo text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0f172a]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Currículo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMim;
