import { useState, useEffect } from "react";
import TituloSecao from "../tituloSubtitulo/index";
import { Globe, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaFigma } from "react-icons/fa";

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
        title: "Desenvolvimento de Plataforma de Benefícios em Saúde - OncoCard",
        year: "2026",
        figmaLink:
            "https://www.figma.com/design/4mAfq44mJvR0jMqIKN0clF/Telas?node-id=327-149&t=0Yr7iauEizAhaNj8-1",
        siteLink: "https://oncocard.com.br/",
        short: "UX/UI Design e Desenvolvimento Front-end",
        long:
            "Atuei como UX/UI Designer e Desenvolvedora Front-end na OncoCard, uma plataforma de cartão de descontos voltada para a área da saúde. O projeto foi desenvolvido com foco em proporcionar uma experiência simples, acessível e intuitiva para usuários que buscam benefícios, descontos e praticidade no acesso a serviços e parceiros da área médica.",
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
        long:
            "Atuei como UX/UI Designer na plataforma de streaming, a Tela Brasil, com lançamento previsto em nível nacional, o objetivo é desenvolver plataformas que sejam inclusivas, com acesso ao cinema brasileiro, priorizando escolas, bibliotecas e instituições de ensino, garantindo uma experiência intuitiva e fluida para todos os usuários.",
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
        long:
            "Pensado para equipes do setor de energia e infraestrutura que recebem grande volume de documentos operacionais e técnicos. A solução centraliza ingestão, aplica IA para leitura, classificação e extração de documentos e informações, e coloca o humano no centro da validação e tomada de decisão — reduzindo tempo operacional e minimizando risco.",
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
        long:
            "Esse projeto foi desenvolvido como trabalho final do curso online “Especialização do projeto UX/UI: da pesquisa à acessibilidade”, ministrado pela Domestika. DoeLivros é uma plataforma online acessível que liga pessoas interessadas em fazer livros usados a quem precisa, promovendo a leitura e o reaproveitamento. O projeto foi desenvolvido visando o processo completo de UX/UI, priorizando a simplicidade e o impacto social.",
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
            className="scroll-mt-24 w-full py-20 px-6 sm:px-10 lg:px-16"
        >
            <div className="max-w-6xl mx-auto">
                <TituloSecao
                    subtitulo="Projetos Desenvolvidos"
                    tituloPrincipal="Trabalhos e Experiências"
                />

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {projects.map((proj, index) => (
                        <article
                            key={index}
                            className="group cursor-pointer border border-[#1C2541]/10 rounded-md p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#1C2541]/20"
                            onClick={() => openModal(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    openModal(index);
                                }
                            }}
                        >
                            <div className="overflow-hidden bg-[#1C2541]/5 aspect-[4/3]">
                                <img
                                    src={proj.images[0]}
                                    alt={proj.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-[#1C2541] text-base font-semibold leading-snug line-clamp-2">
                                    {proj.title}
                                </h3>

                                <p className="text-[#2E7D6B] text-sm font-medium mt-1">
                                    {proj.year}
                                </p>

                                <div className="flex items-center gap-4 mt-3">
                                    {proj.figmaLink && (
                                        <a
                                            href={proj.figmaLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                            className="inline-flex items-center gap-2 text-sm text-[#1C2541]/70 hover:text-[#2E7D6B] transition-colors"
                                        >
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1C2541] text-white">
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
                                            className="inline-flex items-center gap-2 text-sm text-[#1C2541]/70 hover:text-[#2E7D6B] transition-colors"
                                        >
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1C2541] text-white">
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

            {modalActive && (
                <div
                    className="fixed inset-0 z-50 bg-[#1C2541]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] bg-[#F7F5F1] grid grid-cols-1 md:grid-cols-[1.3fr_1fr] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            aria-label="Fechar modal"
                            className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#1C2541] text-white hover:bg-[#2E7D6B] transition-colors"
                        >
                            <X size={18} />
                        </button>

                        {/* Imagem */}
                        <div className="relative bg-[#1C2541]/5 flex items-center justify-center min-h-[260px] max-h-[45vh] md:max-h-[90vh]">
                            <img
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} — imagem ${
                                    currentImageIndex + 1
                                } de ${project.images.length}`}
                                loading="lazy"
                                className="w-full h-full object-contain"
                            />

                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        aria-label="Imagem anterior"
                                        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#1C2541] shadow-sm"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>

                                    <button
                                        onClick={nextImage}
                                        aria-label="Próxima imagem"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#1C2541] shadow-sm"
                                    >
                                        <ChevronRight size={18} />
                                    </button>

                                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-medium text-white bg-[#1C2541]/70 px-2.5 py-1 rounded-full">
                                        {currentImageIndex + 1} /{" "}
                                        {project.images.length}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Conteúdo */}
                        <div className="p-6 sm:p-8 overflow-y-auto">
                            <h3 className="text-[#1C2541] text-xl font-semibold leading-snug">
                                {project.title}
                            </h3>

                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-[#2E7D6B] text-sm font-medium">
                                    {project.short}
                                </span>

                                <span className="text-[#1C2541]/40 text-sm">
                                    ·
                                </span>

                                <span className="text-[#1C2541]/60 text-sm">
                                    {project.year}
                                </span>
                            </div>

                            <div className="flex items-center gap-3 mt-3">
                                {project.figmaLink && (
                                    <a
                                        href={project.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) =>
                                            e.stopPropagation()
                                        }
                                        className="inline-flex items-center gap-2 text-sm text-[#1C2541]/70 hover:text-[#2E7D6B] transition-colors"
                                    >
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1C2541] text-white">
                                            <FaFigma size={14} />
                                        </span>

                                        Figma
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
                                        className="inline-flex items-center gap-2 text-sm text-[#1C2541]/70 hover:text-[#2E7D6B] transition-colors"
                                    >
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1C2541] text-white">
                                            <Globe size={14} />
                                        </span>

                                        Site
                                    </a>
                                )}
                            </div>

                            <p className="text-[#1C2541]/80 text-sm leading-relaxed mt-5">
                                {project.long}
                            </p>

                            <p className="text-[#1C2541] text-sm font-semibold mt-6">
                                {project.descriptionStrong}
                            </p>

                            <ul className="mt-3 space-y-2.5">
                                {project.functionalities.map((func, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-[#1C2541]/80 text-sm leading-relaxed"
                                    >
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E7D6B] shrink-0" />

                                        <span>{func}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}