import React from "react";
import "./index.scss";
import Fotodeperfil from "../../assets_optimized/fotoperfil2.webp";
import documentoPDF from './Currículo-Keilany Gabriel.pdf';
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
          className="
  w-full
  h-[130px]
  sm:h-[220px]
  md:h-[280px]
  lg:h-[280px]
  object-cover
  object-[center_55%]
"
        />
      </div>

      <section
        className="
  sobre-mim
  scroll-mt-24
  relative
  bg-cover
  bg-no-repeat
  w-full
  min-h-[80vh]
  bg-[position:30%_top]
"
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
                width: "100%",
                maxWidth: "280px",
                height: "auto",
                maxHeight: "280px",
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
