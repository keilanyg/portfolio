import { useState, useEffect } from "react";
import TituloSecao from "../tituloSubtitulo/index";
import "./index.scss";
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


import telabrasil from "../../../assets_optimized/works/TelaBrasil.webp";
import telabrasil1 from "../../../assets/Tela Brasil.svg";

const projects = [
    {
        title: "DoeLivros - Plataforma de Doação de Livros Usados",
        year: 2025,
        short:
            "UX/UI Design (Mobile)",
        long:
            "Esse projeto foi desenvolvido como trabalho final do curso online “Especialização do projeto UX/UI: da pesquisa à acessibilidade”, ministrado pela Domestika. DoeLivros é uma plataforma online acessível que liga pessoas interessadas em fazer livros usados a quem precisa, promovendo a leitura e o reaproveitamento. O projeto foi desenvolvido visando o processo completo de UX/UI, priorizando a simplicidade e o impacto social.",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Pesquisa UX: entrevistas, questionário online e comparação com plataformas semelhantes;",
            "Personas e Jornada do Usuário: estabelecimento de perfis e trajetórias de doação / recebimento;",
            "Wireframes e Protótipo Lo - fi: rascunhos das telas e organização da navegação;",
            "Design de UI: guia visual com cores, tipografia e elementos acessíveis;",
            "Protótipo de alta fidelidade no Figma: fluxo completo do usuário para web responsiva;",
            "Estudo de Caso: documentos contendo percepções, escolhas de design e etapas futuras.",
        ],
        images: [doelivros1, doelivros2, doelivros3, doelivros4, doelivros5],
    },
    {
        title: "Sistema de Gerenciamento de Prontuário do Paciente",
        year: 2023,
        short:
            "Aplicativo mobile para gestão ágil de prontuários médicos, com interface simples e intuitiva.",
        long:
            "Desenvolvido como projeto acadêmico, o Prontuário Mobile oferece uma solução prática para profissionais da saúde gerenciarem informações de pacientes. Permite cadastro e acompanhamento de dados pessoais e histórico clínico, com funcionalidades como login seguro, gerenciamento de usuários, painel de controle, listagem e cadastro de pacientes, inserção de itens e visualização detalhada do perfil de cada paciente. O design prioriza usabilidade e acessibilidade para otimizar a rotina médica.",
        descriptionStrong: "Funcionalidades:",
        functionalities: [
            "Login",
            "Cadastro de usuários",
            "Painel de controle",
            "Listagem de pacientes",
            "Cadastro de itens",
            "Perfil do paciente",
        ],
        images: [prontuario2, prontuario3, prontuario4, prontuario5],
    },
    {
        title: "Plataforma de Divulgação de Competições",
        year: 2024,
        short:
            "UX/UI Design (Web e Mobile)",
        long:
            "Projeto pessoal de design de interface e experiência do usuário para uma plataforma informativa sobre competições de jogos. A proposta inclui layouts responsivos para web e mobile, com foco em divulgar eventos, prêmios, desafios e permitir o acesso a formulários de inscrição. O design prioriza clareza, impacto visual e fácil leitura dos avisos e chamadas promocionais.",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Wireframe",
            "Protótipo",
            "Tela voltada à comunicação eficiente com o público",
        ],
        images: [jogos, jogos1, jogos2, jogos3, jogos4, jogos5],
    },
    {
        title: "Desenvolvimento de Plataforma Streaming Nacional e Inclusiva - Tela Brasil",
        year: "2024 (Janeiro) - 2025 (Julho)",
        short:
            "UX/UI Design (Web e Mobile)",
        long:
            "Atuei como UX/UI Designer na plataforma de streaming, a Tela Brasil, com lançamento previsto em nível nacional, o objetivo é desenvolver plataformas que sejam inclusivas, com acesso ao cinema brasileiro, priorizando escolas, bibliotecas e instituições de ensino, garantindo uma experiência intuitiva e fluida para todos os usuários.",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Pesquisa e análise focadas em acessibilidade",
            "Criação de protótipos responsivos e inclusivos",
            "Design visual alinhado às melhores práticas de UX e acessibilidade",
        ],
        images: [telabrasil1, telabrasil],
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
        setCurrentImageIndex(
            (currentImageIndex + 1) % project.images.length
        );
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
                        <img src={proj.images[0]} alt={`Projeto ${index + 1}`} loading="lazy" />
                        <div className="card-content">
                            <div className="card-title">{proj.title}</div>
                            <div className="card-description">{proj.year}</div>
                        </div>
                    </div>
                ))}
            </div>

            {modalActive && (
                <div className="modal active" role="dialog" aria-modal="true">
                    <button
                        className="close-btn"
                        onClick={closeModal}
                        aria-label="Fechar modal"
                    >
                        ✕
                    </button>
                    <button
                        className="prev-btn"
                        onClick={prevImage}
                        aria-label="Imagem anterior"
                    >
                        &#10094;
                    </button>
                    <button
                        className="next-btn"
                        onClick={nextImage}
                        aria-label="Próxima imagem"
                    >
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
                            <div className="modal-description">{project.short}</div>
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
