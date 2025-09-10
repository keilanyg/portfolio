import React, { useState } from "react";
import TituloSecao from "../tituloSubtitulo/index";

import penpot from "../../../assets/penpot.svg";
import html from "../../../assets_optimized/ferramentas/html.webp";
import css from "../../../assets_optimized/ferramentas/css.webp";
import python from "../../../assets_optimized/ferramentas/python.webp";
import accessibilityInsights from "../../../assets_optimized/ferramentas/accessibility-insights.webp";
import wave from "../../../assets_optimized/ferramentas/wave.webp";
import storybook from "../../../assets/storybook.svg";
import bootstrap from "../../../assets_optimized/ferramentas/bootstrap.webp";
import sass from "../../../assets_optimized/ferramentas/sass.webp";
import notion from "../../../assets/notion.svg";
import materialize from "../../../assets/materializecss.svg";
import reactLogo from "../../../assets_optimized/ferramentas/react.webp";
import api from "../../../assets_optimized/ferramentas/api.webp";
import typescript from "../../../assets/typescript.svg";
import tailwind from "../../../assets_optimized/ferramentas/tailwind-css.webp";
import jira from "../../../assets_optimized/ferramentas/jira.webp";
import confluence from "../../../assets_optimized/ferramentas/confluence.webp";
import postgresql from "../../../assets_optimized/ferramentas/postgresql.webp";
import django from "../../../assets_optimized/ferramentas/django.webp";
import figma from "../../../assets_optimized/ferramentas/figma.webp";
import invision from "../../../assets_optimized/ferramentas/invision.webp";
import mockplus from "../../../assets_optimized/ferramentas/mockplus.webp";
import whimsical from "../../../assets_optimized/ferramentas/whimsical.webp";
import miro from "../../../assets_optimized/ferramentas/miro.webp";
import cypress from "../../../assets_optimized/ferramentas/cypress.webp";
import jamboard from "../../../assets/jamboard.svg";
import illustrator from "../../../assets_optimized/ferramentas/illustrator.webp";
import adobe from "../../../assets_optimized/ferramentas/adobe-xd.webp";
import clickup from "../../../assets_optimized/ferramentas/clickup.webp";
import trello from "../../../assets_optimized/ferramentas/trello.webp";

const ferramentas = [
    { id: 1, categoria: "design", nome: "Penpot", img: penpot, alt: "Logo Penpot", style: { filter: "brightness(0) invert(1)" } },
    { id: 2, categoria: "frontend", nome: "HTML", img: html, alt: "Logo HTML" },
    { id: 3, categoria: "frontend", nome: "CSS", img: css, alt: "Logo CSS" },
    { id: 4, categoria: "backend", nome: "Python", img: python, alt: "Logo PYTHON" },
    { id: 5, categoria: "accessibility", nome: "A11Y Insights", img: accessibilityInsights, alt: "Logo Accessibility Insights" },
    { id: 6, categoria: "accessibility", nome: "WAVE", img: wave, alt: "Logo WAVE Accessibility" },
    { id: 7, categoria: "frontend", nome: "Storybook", img: storybook, alt: "Logo Storybook" },
    { id: 8, categoria: "frontend", nome: "Bootstrap", img: bootstrap, alt: "Logo BOOTSTRAP" },
    { id: 9, categoria: "frontend", nome: "Sass", img: sass, alt: "Logo Sass" },
    { id: 10, categoria: "design", nome: "Notion", img: notion, alt: "Logo Notion", style: { filter: "brightness(0) invert(1)" } },
    { id: 11, categoria: "frontend", nome: "Materialize", img: materialize, alt: "Logo MATERIALIZE", style: { filter: "brightness(0) invert(1)" } },
    { id: 12, categoria: "frontend", nome: "React", img: reactLogo, alt: "Logo REACT" },
    { id: 13, categoria: "backend", nome: "API", img: api, alt: "Logo API" },
    { id: 14, categoria: "frontend", nome: "TypeScript", img: typescript, alt: "Logo TypeScript", style: { filter: "brightness(0) invert(1)" } },
    { id: 15, categoria: "frontend", nome: "Tailwind", img: tailwind, alt: "Logo Tailwind" },
    { id: 16, categoria: "design", nome: "Jira", img: jira, alt: "Logo JIRA" },
    { id: 17, categoria: "design", nome: "Confluence", img: confluence, alt: "Logo Confluence" },
    { id: 18, categoria: "backend", nome: "PostgreSQL", img: postgresql, alt: "Logo POSTGRESQL" },
    { id: 19, categoria: "backend", nome: "Django", img: django, alt: "Logo DJANGO" },
    { id: 20, categoria: "design", nome: "Figma", img: figma, alt: "Logo FIGMA" },
    { id: 21, categoria: "design", nome: "InVision", img: invision, alt: "Logo INVISION" },
    { id: 22, categoria: "design", nome: "Mockplus", img: mockplus, alt: "Logo MOCKPLUS" },
    { id: 23, categoria: "design", nome: "Whimsical", img: whimsical, alt: "Logo WHIMSICAL" },
    { id: 24, categoria: "design", nome: "Miro", img: miro, alt: "Logo MIRO" },
    { id: 25, categoria: "accessibility", nome: "Cypress", img: cypress, alt: "Logo Cypress" },
    { id: 26, categoria: "design", nome: "Jamboard", img: jamboard, alt: "Logo JAMBOARD", style: { filter: "brightness(0) invert(1)" } },
    { id: 27, categoria: "design", nome: "Illustrator", img: illustrator, alt: "Logo Illustrator" },
    { id: 28, categoria: "design", nome: "Adobe XD", img: adobe, alt: "Logo Adobe XD" },
    { id: 29, categoria: "design", nome: "Clickup", img: clickup, alt: "Logo Clickup" },
    { id: 30, categoria: "design", nome: "Trello", img: trello, alt: "Logo Trello" },
];


const filtros = [
    { chave: "all", label: "Todos" },
    { chave: "design", label: "Design, Prototipagem & Colaboração" },
    { chave: "frontend", label: "Front-End" },
    { chave: "backend", label: "Back-End e Integrações" },
    { chave: "accessibility", label: "Testes e Acessibilidade" },
];

export function Ferramentas() {
    const [filtroAtivo, setFiltroAtivo] = useState("all");

    const ferramentasFiltradas =
        filtroAtivo === "all"
            ? ferramentas
            : ferramentas.filter((f) => f.categoria === filtroAtivo);

    return (
        <section className="page-section" id="ferramentas">
            <div style={{ maxWidth: "1200px", width: "90%", margin: "0 auto" }}>
                <TituloSecao
                    subtitulo="O que uso para entregar resultados"
                    tituloPrincipal="Ferramentas"
                />

                {/* Filtros */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 8,              // menos espaço entre botões
                    flexWrap: "wrap",
                    marginBottom: 12     // margem menor abaixo da seção
                }}>
                    {filtros.map(({ chave, label }) => (
                        <button
                            key={chave}
                            onClick={() => setFiltroAtivo(chave)}
                            style={{
                                backgroundColor: filtroAtivo === chave ? "#2c2f34" : "white",
                                color: filtroAtivo === chave ? "white" : "#2c2f34",
                                border: "1.5px solid #2c2f34",
                                padding: "0.25rem 0.75rem", // menos padding
                                fontSize: 14,               // fonte menor
                                borderRadius: 6,
                                cursor: "pointer",
                                fontWeight: filtroAtivo === chave ? "600" : "400",
                                transition: "all 0.3s ease",
                                minWidth: 100              // largura mínima menor
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>


                {/* Cards */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 10
                }}>
                    {ferramentasFiltradas.map(({ id, nome, img, alt, style }) => (
                        <div
                            key={id}
                            style={{
                                width: "110px",
                                height: "130px",
                                backgroundColor: "#2c2f34",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                overflow: "hidden",
                                textAlign: "center",
                                transition: "transform 0.2s ease"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            <div style={{
                                height: 100,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "1rem"
                            }}>
                                <img
                                    src={img}
                                    alt={alt}
                                    onError={(e) => {
                                        e.currentTarget.src = "/image/ferramentas/default.webp";
                                    }}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                        ...style
                                    }} 
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#ffffff",
                                    margin: 0,
                                    userSelect: "text"
                                }}>
                                    {nome}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
