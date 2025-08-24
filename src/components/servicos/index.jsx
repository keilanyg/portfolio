import React, { useState } from "react";
import "./index.scss";
import TituloSecao from "../Camposdapag/tituloSubtitulo/index";


const servicesData = [
    {
        id: 1,
        iconClass: "uil uil-arrow",
        title: "UI/UX Designer",
        level: "Nível intermediário - avançado",
        details: [
            "Levantamento e análise de requisitos",
            "Pesquisa de usuário",
            "Protótipos funcionais e responsivos",
            "Teste de acessibilidade",
            "Hierarquia visual",
            "Criação de mockups",
            "Posicionamento visual da marca e branding",
            "Noções de acessibilidade digital (WCAG)",
            "Familiaridade com metodologias de ideação e prototipagem (Design Thinking)",
            "Noções de arquitetura e estruturação de sistemas (Systems Design)",
        ],
    },
    {
        id: 2,
        iconClass: "uil uil-web-grid",
        title: "Front-End",
        level: "Nível intermediário - avançado",
        details: [
            "Desenvolvimento de interfaces modernas e interativas",
            "Criação de layouts responsivos e acessíveis(WCAG)",
            "Familiaridade com frameworks modernos para componentes reutilizáveis",
            "Integração com APIs REST",
            "Noções de versionamento de código com Git e GitHub",
            "Boas práticas de semântica e SEO em HTML",
            "Estilização com pré - processadores e utilitários",
            "Otimização de performance, incluindo carregamento de páginas e imagens",
        ],
    },
];

export default function Servicos() {
    const [activeModal, setActiveModal] = useState(null);

    return (
        <section className="services section" id="services">
            <TituloSecao subtitulo="Áreas de Atuação" tituloPrincipal="Aptidão" />

            <div className="services-container grid">
                {servicesData.map(({ id, iconClass, title, level, details }) => (
                    <div key={id} className="services-content">
                        <div>
                            <i className={`${iconClass} services-icon`}></i>
                            <h3 className="services-title">
                                {title.includes(" ") ? (
                                    <>
                                        {title}
                                    </>
                                ) : (
                                    title
                                )}
                            </h3>
                        </div>

                        <span
                            className="services-button"
                            onClick={() => setActiveModal(id)}
                            tabIndex={0}
                            role="button"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") setActiveModal(id);
                            }}
                        >
                            Ver mais <i className="uil uil-arrow-right services-button-icon"></i>
                        </span>

                        <div
                            className={`services-modal ${activeModal === id ? "active-modal" : ""}`}
                            onClick={() => setActiveModal(null)}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={`modal-title-${id}`}
                        >
                            <div
                                className="services-modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    aria-label="Fechar modal"
                                    className="services-modal-close"
                                    onClick={() => setActiveModal(null)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="var(--skin-color)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>

                                <h3 className="services-modal-title" id={`modal-title-${id}`}>
                                    {title}
                                </h3>
                                <p className="services-modal-description">{level}</p>

                                <ul className="services-modal-services grid">
                                    {details.map((detail, idx) => (
                                        <li key={idx} className="services-modal-service">
                                            <i className="uil uil-check-circle services-modal-icon"></i>
                                            <p className="services-modal-info">{detail}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
