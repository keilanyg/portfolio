import { useState, useEffect } from "react";
import TituloSecao from "../tituloSubtitulo/index";
import "./index.scss";
import figma from "../../../assets_optimized/ferramentas/figma.webp";

import prontuario2 from "../../../assets_optimized/works/Prontuario/Group 2.webp";
import prontuario3 from "../../../assets_optimized/works/Prontuario/Group 3.webp";
import prontuario4 from "../../../assets_optimized/works/Prontuario/Group 4.webp";
import prontuario5 from "../../../assets_optimized/works/Prontuario/Group 5.webp";

import jogos from "../../../assets_optimized/works/Jogos/Tela de Jogos.webp";
import jogos1 from "../../../assets_optimized/works/Jogos/Desktop - 1.webp";
import jogos2 from "../../../assets_optimized/works/Jogos/Desktop - 3.webp";
import jogos3 from "../../../assets_optimized/works/Jogos/Group 12.webp";
import jogos4 from "../../../assets_optimized/works/Jogos/Group 13.webp";
import jogos5 from "../../../assets_optimized/works/Jogos/Group 14.webp";

import doelivros1 from "../../../assets_optimized/works/DoeLeitura/Group 20.webp";
import doelivros2 from "../../../assets_optimized/works/DoeLeitura/Group 21.webp";
import doelivros3 from "../../../assets_optimized/works/DoeLeitura/Group 22.webp";
import doelivros4 from "../../../assets_optimized/works/DoeLeitura/Group 23.webp";
import doelivros5 from "../../../assets_optimized/works/DoeLeitura/Group 24.webp";

import casepratica1 from "../../../assets_optimized/works/CasePratica/casePratica(1).webp";
import casepratica2 from "../../../assets_optimized/works/CasePratica/casePratica(2).webp";
import casepratica3 from "../../../assets_optimized/works/CasePratica/casePratica(3).webp";
import casepratica4 from "../../../assets_optimized/works/CasePratica/casePratica(4).webp";
import casepratica5 from "../../../assets_optimized/works/CasePratica/casePratica(5).webp";
import casepratica6 from "../../../assets_optimized/works/CasePratica/casePratica(6).webp";
import casepratica7 from "../../../assets_optimized/works/CasePratica/casePratica(7).webp";
import casepratica8 from "../../../assets_optimized/works/CasePratica/casePratica(8).webp";

import telabrasil from "../../../assets_optimized/works/TelaBrasil.webp";
import telabrasil1 from "../../../assets/Tela Brasil.svg";

import bazar1 from "../../../assets_optimized/works/Bazar/Bazar.webp";
import bazar2 from "../../../assets_optimized/works/Bazar/Bazar 2.webp";
import bazar3 from "../../../assets_optimized/works/Bazar/Bazar 3.webp";
import bazar4 from "../../../assets_optimized/works/Bazar/Bazar 4.webp";

const projects = [
    {
        title: "Sistema de Gerenciamento de Documentos por meio de IA",
        year: 2025,
        figmaLink: "https://www.figma.com/design/WyL8DyTZCvGC2EzSev0nni/Case-pr%C3%A1tica?node-id=0-1&t=sYJeLk5CxFkKp0cB-1",
        short: "UX/UI Design (Web)",
        long:
            "Pensado para equipes do setor de energia e infraestrutura que recebem grande volume de documentos operacionais e técnicos...",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Pesquisa UX: mapeamento da dor, impactos e necessidades do usuário;",
            "Personas e Jornada do Usuário...",
            "Protótipo de Telas...",
        ],
        images: [casepratica1, casepratica7, casepratica8, casepratica3, casepratica2, casepratica4, casepratica5, casepratica6],
    },
    {
        title: "DoeLivros - Plataforma de Doação de Livros Usados",
        year: 2025,
        figmaLink: "https://www.figma.com/design/dXHfTRilfLLNMyOipJYOwp/DoeLeitura?node-id=0-1&t=SHvrGgtbH3t3aUHg-1",
        short: "UX/UI Design (Mobile)",
        long:
            "Esse projeto foi desenvolvido como trabalho final do curso online...",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Pesquisa UX...",
            "Personas...",
        ],
        images: [doelivros1, doelivros2, doelivros3, doelivros4, doelivros5],
    },
    {
        title: "Sistema de Gerenciamento de Prontuário do Paciente",
        year: 2023,
        figmaLink: "https://www.figma.com/design/4mAfq44mJvR0jMqIKN0clF/Telas?node-id=202-8&t=RDQZPzOzlbKq7Sjl-1",
        short: "UX UI Design e Implementação com React Native",
        long:
            "Desenvolvido como projeto acadêmico...",
        descriptionStrong: "Funcionalidades:",
        functionalities: [
            "Login",
            "Cadastro de usuários",
        ],
        images: [prontuario2, prontuario3, prontuario4, prontuario5],
    },
    {
        title: "Plataforma de Divulgação de Competições",
        year: 2024,
        figmaLink: "https://www.figma.com/design/4mAfq44mJvR0jMqIKN0clF/Telas?node-id=204-126&t=RDQZPzOzlbKq7Sjl-1",
        short: "UX/UI Design (Web e Mobile)",
        long:
            "Projeto pessoal de design de interface e experiência do usuário...",
        descriptionStrong: "Entregas:",
        functionalities: ["Wireframe", "Protótipo"],
        images: [jogos, jogos1, jogos2, jogos3, jogos4, jogos5],
    },
    {
        title: "Desenvolvimento de Plataforma Streaming Nacional e Inclusiva - Tela Brasil",
        year: "2024 (Janeiro) - 2025 (Julho)",
        figmaLink: false,
        short: "UX/UI Design (Web e Mobile)",
        long:
            "Atuei como UX/UI Designer na plataforma de streaming Tela Brasil...",
        descriptionStrong: "Entregas:",
        functionalities: ["Pesquisa e análise focadas em acessibilidade", "Criação de protótipos"],
        images: [telabrasil1, telabrasil],
    },
    {
        title: "Landing Page – Bazar do Novo",
        year: "2025",
        figmaLink: false,
        short: "UX/UI Design (Web)",
        long:
            "Projeto pessoal de design de interface e experiência do usuário...",
        descriptionStrong: "Entregas:",
        functionalities: ["Layout completo", "Estrutura focada em comunicação"],
        images: [bazar1, bazar2, bazar3, bazar4],
    },
];

export default function Portfolio() {
    const [modalActive, setModalActive] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function openModal(projectIndex) {
        setCurrentProjectIndex(projectIndex);
        setCurrentImageIndex(0);
        setModalActive(true);
    }

    function closeModal() {
        setModalActive(false);
    }

    function nextImage() {
        const project = projects[currentProjectIndex];
        setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
    }

    function prevImage() {
        const project = projects[currentProjectIndex];
        setCurrentImageIndex(
            (currentImageIndex - 1 + project.images.length) % project.images.length
        );
    }

    useEffect(() => {
        if (modalActive) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [modalActive]);

    const project = projects[currentProjectIndex];

    return (
        <section id="portfolio">
            <TituloSecao subtitulo="Meus projetos" tituloPrincipal="Portfolio" />

            <div className="grid">
                {projects.map((proj, index) => (
                    <div
                        key={index}
                        className="card"
                        onClick={() => openModal(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") openModal(index);
                        }}
                    >
                        <img
                            src={proj.images[0]}
                            alt={`Projeto ${index + 1}`}
                            loading="lazy"
                        />

                        <div className="card-content">
                            <div className="card-title">{proj.title}</div>

                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                
                                {/* SÓ MOSTRA O FIGMA SE TIVER LINK */}
                                {proj.figmaLink && (
                                    <a
                                        href={proj.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <img
                                            src={figma}
                                            alt="Figma"
                                            style={{ cursor: "pointer", width: "25px", height: "25px" }}
                                        />
                                    </a>
                                )}

                                <div className="card-description">{proj.year}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modalActive && (
                <div className="modal active" role="dialog" aria-modal="true">
                    <button className="close-btn" onClick={closeModal} aria-label="Fechar modal">
                        ✕
                    </button>
                    <button className="prev-btn" onClick={prevImage} aria-label="Imagem anterior">
                        &#10094;
                    </button>
                    <button className="next-btn" onClick={nextImage} aria-label="Próxima imagem">
                        &#10095;
                    </button>

                    <div className="modal-content">
                        <img
                            id="modalImage"
                            src={project.images[currentImageIndex]}
                            alt={`Imagem do projeto ${currentProjectIndex + 1}`}
                            className="modal-image"
                            loading="lazy"
                        />

                        <div className="modal-description-container">
                            <div className="modal-title">{project.title}</div>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <div className="modal-description">{project.short}</div>

                                {/* SOMENTE SE TIVER LINK */}
                                {project.figmaLink && (
                                    <a
                                        href={project.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={figma}
                                            alt="Figma"
                                            style={{ cursor: "pointer", width: "30px", height: "30px" }}
                                        />
                                    </a>
                                )}
                            </div>

                            <div className="modal-description">{project.year}</div>
                            <div className="modal-description">{project.long}</div>

                            <div className="modal-description strong">{project.descriptionStrong}</div>

                            <div className="modal-functionalities">
                                <ul>
                                    {project.functionalities.map((func, i) => (
                                        <li key={i}>{func}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
