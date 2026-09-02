import React, { useState } from "react";
import TituloSecao from "../tituloSubtitulo/index";

import html from "../../../assets_optimized/ferramentas/html.webp";
import css from "../../../assets_optimized/ferramentas/css.webp";
import python from "../../../assets_optimized/ferramentas/python.webp";
import accessibilityInsights from "../../../assets_optimized/ferramentas/accessibility-insights.webp";
import wave from "../../../assets_optimized/ferramentas/wave.webp";
import bootstrap from "../../../assets_optimized/ferramentas/bootstrap.webp";
import sass from "../../../assets_optimized/ferramentas/sass.webp";
import notion from "../../../assets/notion.svg";
import reactLogo from "../../../assets_optimized/ferramentas/react.webp";
import api from "../../../assets_optimized/ferramentas/api.webp";
import typescript from "../../../assets/typescript.svg";
import tailwind from "../../../assets_optimized/ferramentas/tailwind-css.webp";
import jira from "../../../assets_optimized/ferramentas/jira.webp";
import confluence from "../../../assets_optimized/ferramentas/confluence.webp";
import postgresql from "../../../assets_optimized/ferramentas/postgresql.webp";
import django from "../../../assets_optimized/ferramentas/django.webp";
import figma from "../../../assets_optimized/ferramentas/figma.webp";
import miro from "../../../assets_optimized/ferramentas/miro.webp";
import cypress from "../../../assets_optimized/ferramentas/cypress.webp";
import illustrator from "../../../assets_optimized/ferramentas/illustrator.webp";
import adobe from "../../../assets_optimized/ferramentas/adobe-xd.webp";
import clickup from "../../../assets_optimized/ferramentas/clickup.webp";
import trello from "../../../assets_optimized/ferramentas/trello.webp";
import js from "../../../assets_optimized/ferramentas/javascript.webp";
import next from "../../../assets_optimized/ferramentas/nextjs.webp";
import swagger from "../../../assets_optimized/ferramentas/swagger.webp";
import claude from "../../../assets_optimized/ferramentas/claude-ai.webp";
import photoshop from "../../../assets_optimized/ferramentas/photoshop.webp";
import chatgpt from "../../../assets_optimized/ferramentas/chatgpt.webp";

const ferramentas = [
    { id: 2, categoria: "frontend", nome: "HTML", img: html, alt: "Logo HTML" },
    { id: 3, categoria: "frontend", nome: "CSS", img: css, alt: "Logo CSS" },
    { id: 4, categoria: "backend", nome: "Python", img: python, alt: "Logo PYTHON" },
    { id: 5, categoria: "accessibility", nome: "Insights", img: accessibilityInsights, alt: "Logo Accessibility Insights" },
    { id: 6, categoria: "accessibility", nome: "WAVE", img: wave, alt: "Logo WAVE Accessibility" },
    { id: 8, categoria: "frontend", nome: "Bootstrap", img: bootstrap, alt: "Logo BOOTSTRAP" },
    { id: 9, categoria: "frontend", nome: "Sass", img: sass, alt: "Logo Sass" },
    { id: 10, categoria: "design", nome: "Notion", img: notion, alt: "Logo Notion", style: { filter: "brightness(0) invert(1)" } },
    { id: 12, categoria: "frontend", nome: "React", img: reactLogo, alt: "Logo REACT" },
    { id: 13, categoria: "backend", nome: "API REST", img: api, alt: "Logo API" },
    { id: 14, categoria: "frontend", nome: "TypeScript", img: typescript, alt: "Logo TypeScript", style: { filter: "brightness(0) invert(1)" } },
    { id: 15, categoria: "frontend", nome: "Tailwind", img: tailwind, alt: "Logo Tailwind" },
    { id: 16, categoria: "design", nome: "Jira", img: jira, alt: "Logo JIRA" },
    { id: 17, categoria: "design", nome: "Confluence", img: confluence, alt: "Logo Confluence" },
    { id: 18, categoria: "backend", nome: "PostgreSQL", img: postgresql, alt: "Logo POSTGRESQL" },
    { id: 19, categoria: "backend", nome: "Django", img: django, alt: "Logo DJANGO" },
    { id: 20, categoria: "design", nome: "Figma", img: figma, alt: "Logo FIGMA" },
    { id: 24, categoria: "design", nome: "Miro", img: miro, alt: "Logo MIRO" },
    { id: 25, categoria: "accessibility", nome: "Cypress", img: cypress, alt: "Logo Cypress" },
    { id: 27, categoria: "design", nome: "Illustrator", img: illustrator, alt: "Logo Illustrator" },
    { id: 28, categoria: "design", nome: "Adobe XD", img: adobe, alt: "Logo Adobe XD" },
    { id: 29, categoria: "design", nome: "Clickup", img: clickup, alt: "Logo Clickup" },
    { id: 30, categoria: "design", nome: "Trello", img: trello, alt: "Logo Trello" },
    { id: 31, categoria: "frontend", nome: "Next.js", img: next, alt: "Logo Next.js" },
    { id: 32, categoria: "frontend", nome: "JavaScript", img: js, alt: "Logo JavaScript" },
    { id: 33, categoria: "backend", nome: "Swagger", img: swagger, alt: "Logo Swagger" },
    { id: 34, categoria: "design", nome: "Claude IA", img: claude, alt: "Logo Claude.IA" },
    { id: 35, categoria: "design", nome: "Photoshop", img: photoshop, alt: "Logo Photoshop" },
    { id: 36, categoria: "design", nome: "ChatGPT", img: chatgpt, alt: "Logo ChatGPT" },
];

const filtros = [
    { chave: "design", label: "Design, Gestão e IA" },
    { chave: "accessibility", label: "Testes e Acessibilidade" },
    { chave: "frontend", label: "Front-End" },
    { chave: "backend", label: "Back-End e Integrações" },
];

export function Ferramentas() {
    const [filtroAtivo, setFiltroAtivo] = useState("design");

    const ferramentasFiltradas = ferramentas.filter(
        (f) => f.categoria === filtroAtivo
    );

    return (
        <section
            id="ferramentas"
            className="scroll-mt-24 w-full bg-[#10162B] py-20 px-6 sm:px-10 lg:px-16"
        >
            <div className="max-w-5xl mx-auto">
                <div className="titulo-ferramentas">
                    <TituloSecao
                        tituloPrincipal="O que uso para entregar resultados"
                        subtitulo="Ferramentas"
                    />
                </div>

                {/* Filtros */}
                <div
                    role="tablist"
                    aria-label="Categorias de ferramentas"
                    className="flex flex-wrap justify-center gap-2 mt-10 mb-10"
                >
                    {filtros.map(({ chave, label }) => {
                        const isActive = filtroAtivo === chave;
                        return (
                            <button
                                key={chave}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setFiltroAtivo(chave)}
                                className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D6B] ${isActive
                                    ? "bg-[#2E7D6B] border-[#2E7D6B] text-white"
                                    : "bg-transparent border-white/15 text-white/60 hover:border-[#2E7D6B]/60 hover:text-white"
                                    }`}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* Grid de ferramentas */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
                    {ferramentasFiltradas.map(({ id, nome, img, alt, style }) => (
                        <div
                            key={id}
                            className="group flex flex-col items-center justify-center gap-2 aspect-square rounded-xl bg-[#1C2541] border border-white/5 px-3 py-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#2E7D6B]/50"
                        >
                            <img
                                src={img}
                                alt={alt}
                                loading="lazy"
                                style={style}
                                className="max-h-8 sm:max-h-9 w-auto object-contain"
                            />
                            <h3 className="text-white text-xs sm:text-sm font-medium text-center leading-tight">
                                {nome}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}