"use client";

import { useState, useEffect } from "react";
import TituloSecao from "../tituloSubtitulo/index";
import {
    Globe,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { FaFigma } from "react-icons/fa";

import portolaticinioslogo from "../../../assets_optimized/logo-porto.webp";

import prontuario2 from "../../../assets_optimized/works/Prontuario/Group 2.webp";
import prontuario3 from "../../../assets_optimized/works/Prontuario/Group 3.webp";
import prontuario4 from "../../../assets_optimized/works/Prontuario/Group 4.webp";
import prontuario5 from "../../../assets_optimized/works/Prontuario/Group 5.webp";

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

import telabrasil1 from "../../../assets/Tela Brasil.svg";
import telabrasil2 from "../../../assets_optimized/works/TelaBrasil/Tela Brasil 2.webp";
import telabrasil3 from "../../../assets_optimized/works/TelaBrasil/Tela Brasil 3.webp";
import telabrasil4 from "../../../assets_optimized/works/TelaBrasil/Tela Brasil 4.webp";
import telabrasil5 from "../../../assets_optimized/works/TelaBrasil/Tela Brasil 5.webp";
import telabrasil6 from "../../../assets_optimized/works/TelaBrasil/Tela Brasil 6.webp";
import telabrasil7 from "../../../assets_optimized/works/TelaBrasil/Tela Brasil 7.webp";
import telabrasil8 from "../../../assets_optimized/works/TelaBrasil/Tela Brasil 8.webp";
import telabrasil9 from "../../../assets_optimized/works/TelaBrasil/Tela Brasil 9.webp";

import oncocard from "../../../assets_optimized/works/Oncocard/Oncocard.webp";
import oncocardlogo from "../../../assets_optimized/works/Oncocard/oncocard logo.webp";
import oncocard1 from "../../../assets_optimized/works/Oncocard/Onco 1.webp";
import oncocard2 from "../../../assets_optimized/works/Oncocard/Onco 2.webp";
import oncocard3 from "../../../assets_optimized/works/Oncocard/Onco 3.webp";
import oncocard4 from "../../../assets_optimized/works/Oncocard/Onco 4.webp";

const projects = [
    {
        title: "Desenvolvimento de Site Institucional - Porto Laticínios",
        year: "2026",
        figmaLink:
            "https://www.figma.com/design/1pEx9D7IBeRh55SzIokNTV/Untitled?node-id=0-1&t=hs8WX0qrz4xWf0Wz-1",
        siteLink: "https://portolaticinios.com.br/",
        short: "UX/UI Design e Desenvolvimento Front-end",
        long: "Atuei como UX/UI Designer e Desenvolvedora Front-end no desenvolvimento do site da Porto Laticínios, criando uma experiência digital para apresentar a marca, seus produtos e sua produção de forma clara, moderna e estratégica. O projeto foi pensado para fortalecer a presença digital da empresa, facilitar a navegação entre os produtos e aproximar clientes do contato comercial, com uma interface responsiva, intuitiva e alinhada à identidade da marca.",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Criação de uma interface responsiva e alinhada à identidade visual da marca",
            "Desenvolvimento front-end com foco em performance, usabilidade e experiência mobile",
            "Estruturação de páginas e seções para apresentação dos produtos e diferenciais da empresa",
            "Criação de pontos de conversão para facilitar o contato e a realização de pedidos",
        ],
        images: [portolaticinioslogo],
    },

    {
        title: "Desenvolvimento de Plataforma de Benefícios em Saúde - OncoCard",
        year: "2026",
        figmaLink:
            "https://www.figma.com/design/4mAfq44mJvR0jMqIKN0clF/Telas?node-id=327-149&t=0Yr7iauEizAhaNj8-1",
        siteLink: "https://oncocard.com.br/",
        short: "UX/UI Design e Desenvolvimento Front-end",
        long: "Atuei como UX/UI Designer e Desenvolvedora Front-end na OncoCard, uma plataforma de cartão de descontos voltada para a área da saúde. O projeto foi desenvolvido com foco em proporcionar uma experiência simples, acessível e intuitiva para usuários que buscam benefícios, descontos e praticidade no acesso a serviços e parceiros da área médica.",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Criação de interfaces responsivas e centradas no usuário",
            "Desenvolvimento front-end com foco em usabilidade e performance",
            "Estruturação de fluxos para facilitar o acesso aos benefícios e descontos",
            "Aplicação de boas práticas de UX/UI para melhorar a experiência digital",
        ],
        images: [
            oncocardlogo,
            oncocard,
            oncocard1,
            oncocard2,
            oncocard3,
            oncocard4,
        ],
    },

    {
        title:
            "Desenvolvimento de Plataforma Streaming Nacional e Inclusiva - Tela Brasil",
        year: "2024 - 2025",
        figmaLink:
            "https://www.figma.com/design/4mAfq44mJvR0jMqIKN0clF/Telas?node-id=332-149&t=CjciMItprno9FR7e-1",
        siteLink: "https://telabrasil.cultura.gov.br/",
        short: "UX/UI Design (Web e Mobile)",
        long: "Atuei como UX/UI Designer na plataforma de streaming, a Tela Brasil, com lançamento previsto em nível nacional, o objetivo é desenvolver plataformas que sejam inclusivas, com acesso ao cinema brasileiro, priorizando escolas, bibliotecas e instituições de ensino, garantindo uma experiência intuitiva e fluida para todos os usuários.",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Pesquisa e análise focadas em acessibilidade",
            "Criação de protótipos responsivos e inclusivos",
            "Design visual alinhado às melhores práticas de UX e acessibilidade",
        ],
        images: [
            telabrasil1,
            telabrasil2,
            telabrasil3,
            telabrasil4,
            telabrasil5,
            telabrasil6,
            telabrasil7,
            telabrasil8,
            telabrasil9,
        ],
    },

    {
        title: "Sistema de Gerenciamento de Documentos por meio de IA",
        year: "2025",
        figmaLink:
            "https://www.figma.com/design/WyL8DyTZCvGC2EzSev0nni/Case-pr%C3%A1tica?node-id=0-1&t=sYJeLk5CxFkKp0cB-1",
        short: "UX/UI Design (Web)",
        long: "Pensado para equipes do setor de energia e infraestrutura que recebem grande volume de documentos operacionais e técnicos. A solução centraliza ingestão, aplica IA para leitura, classificação e extração de documentos e informações, e coloca o humano no centro da validação e tomada de decisão — reduzindo tempo operacional e minimizando risco.",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Pesquisa UX: impactos e necessidades do usuário;",
            "Personas e Jornada do Usuário: definição de perfis (analista, engenheiro, gestor);",
            "Protótipo de Telas: dashboard, envio e análise de documentos, histórico e tomada de decisão;",
            "Aplicação de IA: OCR, classificação, extração de dados, detecção de riscos e resumos automáticos;",
            "MVP Funcional: upload em lote, visualizador com highlights, fila de revisão e criação de ações;",
            "Fluxo de dados: etapas de ingestão, processamento, armazenamento, interface e exportação.",
        ],
        images: [
            casepratica1,
            casepratica7,
            casepratica8,
            casepratica3,
            casepratica2,
            casepratica4,
            casepratica5,
            casepratica6,
        ],
    },

    {
        title: "DoeLivros - Plataforma de Doação de Livros Usados",
        year: "2025",
        figmaLink:
            "https://www.figma.com/design/dXHfTRilfLLNMyOipJYOwp/DoeLeitura?node-id=0-1&t=SHvrGgtbH3t3aUHg-1",
        short: "UX/UI Design (Mobile)",
        long: "Esse projeto foi desenvolvido como trabalho final do curso online “Especialização do projeto UX/UI: da pesquisa à acessibilidade”, ministrado pela Domestika. DoeLivros é uma plataforma online acessível que liga pessoas interessadas em fazer livros usados a quem precisa, promovendo a leitura e o reaproveitamento. O projeto foi desenvolvido visando o processo completo de UX/UI, priorizando a simplicidade e o impacto social.",
        descriptionStrong: "Entregas:",
        functionalities: [
            "Pesquisa UX: entrevistas, questionários e comparação com plataformas semelhantes;",
            "Personas e Jornada do Usuário: estabelecimento de perfis e trajetórias de doação / recebimento;",
            "Wireframes e Protótipo Lo-fi: rascunhos das telas e organização da navegação;",
            "Design de UI: guia visual com cores, tipografia e elementos acessíveis;",
            "Protótipo de alta fidelidade no Figma: fluxo completo do usuário para web responsiva;",
            "Estudo de Caso: documentos contendo percepções, escolhas de design e etapas futuras.",
        ],
        images: [
            doelivros1,
            doelivros2,
            doelivros3,
            doelivros4,
            doelivros5,
        ],
    },

    {
        title: "Sistema de Gerenciamento de Prontuário do Paciente",
        year: "2023",
        figmaLink:
            "https://www.figma.com/design/4mAfq44mJvR0jMqIKN0clF/Telas?node-id=202-8&t=RDQZPzOzlbKq7Sjl-1",
        short: "UX UI Design e Implementação com React Native",
        long: "Desenvolvido como projeto acadêmico, o Prontuário Mobile oferece uma solução prática para profissionais da saúde gerenciarem informações de pacientes. Permite cadastro e acompanhamento de dados pessoais e histórico clínico, com funcionalidades como login seguro, gerenciamento de usuários, painel de controle, listagem e cadastro de pacientes, inserção de itens e visualização detalhada do perfil de cada paciente. O design prioriza usabilidade e acessibilidade para otimizar a rotina médica.",
        descriptionStrong: "Funcionalidades:",
        functionalities: [
            "Login",
            "Cadastro de usuários",
            "Painel de controle",
            "Listagem de pacientes",
            "Cadastro de itens",
            "Perfil do paciente",
        ],
        images: [
            prontuario2,
            prontuario3,
            prontuario4,
            prontuario5,
        ],
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
        setCurrentImageIndex((prevIndex) => {
            const project = projects[currentProjectIndex];

            return (prevIndex + 1) % project.images.length;
        });
    }

    function prevImage() {
        setCurrentImageIndex((prevIndex) => {
            const project = projects[currentProjectIndex];

            return (
                (prevIndex - 1 + project.images.length) %
                project.images.length
            );
        });
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

    useEffect(() => {
        function onKeyDown(e) {
            if (!modalActive) return;

            if (e.key === "Escape") {
                closeModal();
            }

            if (e.key === "ArrowRight") {
                nextImage();
            }

            if (e.key === "ArrowLeft") {
                prevImage();
            }
        }

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [modalActive, currentProjectIndex]);

    const project = projects[currentProjectIndex];

    return (
        <section
            id="portfolio"
            className="scroll-mt-24 w-full px-6 py-20 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-6xl">
                <TituloSecao
                    subtitulo="Projetos Desenvolvidos"
                    tituloPrincipal="Trabalhos e Experiências"
                />

                {/* Projetos */}
                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((proj, index) => (
                        <article
                            key={index}
                            className="group cursor-pointer rounded-md border border-[#1C2541]/10 p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#1C2541]/20"
                            onClick={() => openModal(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openModal(index);
                                }
                            }}
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-[#1C2541]/5">
                                <img
                                    src={proj.images[0]}
                                    alt={proj.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="line-clamp-2 text-base font-semibold leading-snug text-[#1C2541]">
                                    {proj.title}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-[#c6a75e]">
                                    {proj.year}
                                </p>

                                <div className="mt-3 flex flex-wrap items-center gap-4">
                                    {proj.figmaLink && (
                                        <a
                                            href={proj.figmaLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                            className="inline-flex items-center gap-2 text-sm text-[#1C2541]/70 transition-colors hover:text-[#c6a75e]"
                                        >
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1C2541] text-white">
                                                <FaFigma size={14} />
                                            </span>

                                            Ver no Figma
                                        </a>
                                    )}

                                    {proj.siteLink && (
                                        <a
                                            href={proj.siteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                            className="inline-flex items-center gap-2 text-sm text-[#1C2541]/70 transition-colors hover:text-[#c6a75e]"
                                        >
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1C2541] text-white">
                                                <Globe size={14} />
                                            </span>

                                            Ver o Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalActive && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2541]/90 p-4 backdrop-blur-sm sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={project.title}
                    onClick={closeModal}
                >
                    <div
                        className="relative grid max-h-[90vh] w-full max-w-5xl gap-8 overflow-y-auto rounded-3xl bg-[#F7F5F1] p-5 shadow-2xl sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:p-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Fechar */}
                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Fechar modal"
                            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#1C2541] text-white transition-colors hover:bg-[#c6a75e]"
                        >
                            <X size={18} />
                        </button>

                        {/* Imagem */}
                        <div className="relative flex min-h-[260px] max-h-[45vh] items-center justify-center overflow-hidden rounded-2xl bg-[#1C2541]/5 lg:max-h-[70vh]">
                            <img
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} — imagem ${
                                    currentImageIndex + 1
                                } de ${project.images.length}`}
                                loading="lazy"
                                className="h-full w-full object-contain"
                            />

                            {project.images.length > 1 && (
                                <>
                                    {/* Imagem anterior */}
                                    <button
                                        type="button"
                                        onClick={prevImage}
                                        aria-label="Imagem anterior"
                                        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1C2541] shadow-sm transition-colors hover:bg-white"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>

                                    {/* Próxima imagem */}
                                    <button
                                        type="button"
                                        onClick={nextImage}
                                        aria-label="Próxima imagem"
                                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1C2541] shadow-sm transition-colors hover:bg-white"
                                    >
                                        <ChevronRight size={18} />
                                    </button>

                                    {/* Indicadores */}
                                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
                                        {project.images.map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                aria-label={`Ir para imagem ${
                                                    i + 1
                                                }`}
                                                aria-current={
                                                    currentImageIndex === i
                                                        ? "true"
                                                        : undefined
                                                }
                                                onClick={() =>
                                                    setCurrentImageIndex(i)
                                                }
                                                className={`h-1.5 rounded-full transition-all ${
                                                    currentImageIndex === i
                                                        ? "w-8 bg-[#c6a75e]"
                                                        : "w-3 bg-white/60"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Conteúdo */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#c6a75e]">
                                {project.short} · {project.year}
                            </p>

                            <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#1C2541] sm:text-3xl lg:text-4xl">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-sm leading-relaxed text-[#1C2541]/70 sm:text-base">
                                {project.long}
                            </p>

                            <p className="mt-6 text-sm font-semibold text-[#1C2541]">
                                {project.descriptionStrong}
                            </p>

                            <ul className="mt-3 flex flex-col gap-2.5 text-start">
                                {project.functionalities.map(
                                    (func, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-sm leading-relaxed text-[#1C2541]/80"
                                        >
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6a75e]" />

                                            <span>{func}</span>
                                        </li>
                                    )
                                )}
                            </ul>

                            {/* Links */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                {project.figmaLink && (
                                    <a
                                        href={project.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) =>
                                            e.stopPropagation()
                                        }
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1C2541] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                                    >
                                        <FaFigma size={14} />
                                        Ver Figma
                                    </a>
                                )}

                                {project.siteLink && (
                                    <a
                                        href={project.siteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) =>
                                            e.stopPropagation()
                                        }
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1C2541]/20 px-6 py-3 text-sm font-semibold text-[#1C2541] transition-colors hover:border-[#c6a75e] hover:text-[#c6a75e]"
                                    >
                                        <Globe size={14} />
                                        Ver o Site
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}