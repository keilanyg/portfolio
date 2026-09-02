import React, { useState } from "react";
import TituloSecao from "../Camposdapag/tituloSubtitulo/index";

const servicesData = [
  {
    id: 1,
    iconClass: "uil uil-arrow",
    title: "UI/UX Designer",
    level: "Nível intermediário — avançado",
    details: [
      "Levantamento e análise de requisitos",
      "Pesquisa de usuário",
      "Protótipos funcionais e responsivos",
      "Teste de acessibilidade e A/B",
      "Hierarquia visual",
      "Posicionamento visual da marca e branding",
      "Noções de acessibilidade digital (WCAG)",
      "Familiaridade com metodologias de ideação e prototipagem (Design Thinking)",
      "Noções de arquitetura e estruturação de sistemas (Systems Design)",
      "Criação de mockups",
    ],
  },
  {
    id: 2,
    iconClass: "uil uil-web-grid",
    title: "Front-End",
    level: "Nível intermediário — avançado",
    details: [
      "Desenvolvimento de interfaces modernas e interativas",
      "Criação de layouts responsivos e acessíveis (WCAG)",
      "Familiaridade com frameworks modernos para componentes reutilizáveis",
      "Integração com APIs REST",
      "Noções de versionamento de código com Git e GitHub",
      "Boas práticas de semântica e SEO em HTML",
      "Estilização com pré-processadores e utilitários",
      "Otimização de performance, incluindo carregamento de páginas e imagens",
    ],
  },
];

export default function Servicos() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const active = servicesData.find((s) => s.id === activeId);

  return (
    <section
      id="services"
      className="w-full scroll-mt-24 py-20 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <TituloSecao subtitulo="Áreas de Atuação" tituloPrincipal="Aptidão" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1px_1fr] gap-x-10 gap-y-8">
          {/* Lista de áreas */}
          <nav aria-label="Áreas de atuação" className="flex md:flex-col gap-2">
            {servicesData.map(({ id, iconClass, title }) => {
              const isActive = id === activeId;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveId(id)}
                  aria-current={isActive}
                  className={`flex items-center gap-3 rounded-md px-4 py-3 text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D6B] ${
                    isActive
                      ? "bg-[#1C2541] text-white"
                      : "text-[#1C2541]/70 hover:bg-[#1C2541]/5"
                  }`}
                >
                  <i className={`${iconClass} text-base`}></i>
                  <span className="text-sm sm:text-base font-medium">
                    {title}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Divisor vertical (desktop) */}
          <div className="hidden md:block bg-[#1C2541]/10" />

          {/* Painel de detalhes */}
          <div className="min-w-0">
            <div className="border-b border-[#1C2541]/10 pb-5 mb-6">
              <h3 className="text-[#1C2541] text-2xl font-semibold">
                {active.title}
              </h3>
              <p className="text-[#2E7D6B] text-sm font-medium mt-1">
                {active.level}
              </p>
            </div>

            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {active.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-start gap-3 text-[#1C2541]/80 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E7D6B] shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}