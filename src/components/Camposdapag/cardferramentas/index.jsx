import React, { useState, useEffect } from "react";
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
    { id: 5, categoria: "accessibility", nome: "A11y Insights", img: accessibilityInsights, alt: "Logo Accessibility Insights" },
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
    const [colunas, setColunas] = useState(6);
    const [isMobile, setIsMobile] = useState(false);

    const ferramentasFiltradas = ferramentas.filter(
        (f) => f.categoria === filtroAtivo
    );

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);

            if (mobile) {
                setColunas(3);
            } else {
                setColunas(6);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cardSize = isMobile ? 90 : 110;

    return (
        <section className="page-section scroll-mt-24" id="ferramentas">
            <div style={{ maxWidth: "1200px", width: "90%", margin: "0 auto" }}>
                
                <TituloSecao
                    tituloPrincipal="O que uso para entregar resultados"
                    subtitulo="Ferramentas"
                />

                {/* Filtros */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 12,
                    marginTop: "10px"
                }}>
                    {filtros.map(({ chave, label }) => (
                        <button
                            key={chave}
                            onClick={() => setFiltroAtivo(chave)}
                            style={{
                                backgroundColor: filtroAtivo === chave ? "#102A43" : "white",
                                color: filtroAtivo === chave ? "white" : "#102A43",
                                border: "1.5px solid #2c2f34",
                                padding: "0.25rem 0.75rem",
                                fontSize: 14,
                                borderRadius: 6,
                                cursor: "pointer",
                                fontWeight: filtroAtivo === chave ? "600" : "400",
                                transition: "all 0.3s ease",
                                minWidth: 100
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${colunas}, ${cardSize}px)`,
                        justifyContent: "center",
                        gap: 8
                    }}
                >
                    {ferramentasFiltradas.map(({ id, nome, img, alt, style }) => (
                        <div
                            key={id}
                            style={{
                                width: `${cardSize}px`,
                                height: `${cardSize + 10}px`,
                                backgroundColor: "#102A43",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                textAlign: "center",
                                transition: "transform 0.2s ease"
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform = "scale(1.05)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                            }
                        >
                            <div
                                style={{
                                    height: cardSize - 20,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "1rem"
                                }}
                            >
                                <img
                                    src={img}
                                    alt={alt}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                        ...style
                                    }}
                                    loading="lazy"
                                />
                            </div>

                            <h3
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    color: "#ffffff",
                                    margin: 0
                                }}
                            >
                                {nome}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}