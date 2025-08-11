import React, { useState } from "react";
import TituloSecao from "../tituloSubtitulo/index";

import penpot from "../../../assets/penpot.svg";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import python from "../../../assets/python.png";
import accessibilityInsights from "../../../assets/accessibility-insights.png";
import wave from "../../../assets/wave.png";
import storybook from "../../../assets/storybook.svg";
import bootstrap from "../../../assets/bootstrap.png";
import sass from "../../../assets/sass.png";
import notion from "../../../assets/notion.svg";
import materialize from "../../../assets/materializecss.svg";
import reactLogo from "../../../assets/react.png";
import api from "../../../assets/api.png";
import typescript from "../../../assets/typescript.svg";
import tailwind from "../../../assets/tailwind-css.png";
import jira from "../../../assets/jira.png";
import confluence from "../../../assets/confluence.png";
import postgresql from "../../../assets/postgresql.png";
import django from "../../../assets/django.png";
import figma from "../../../assets/figma.png";
import invision from "../../../assets/invision.png";
import mockplus from "../../../assets/mockplus.png";
import whimsical from "../../../assets/whimsical.png";
import miro from "../../../assets/miro.png";
import cypress from "../../../assets/cypress.png";
import jamboard from "../../../assets/jamboard.svg";

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
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
                <TituloSecao
                    subtitulo="O que uso para entregar resultados"
                    tituloPrincipal="Ferramentas"
                />
                {/* Filtros */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 15,
                        flexWrap: "wrap",
                        marginBottom: 24,
                    }}
                >
                    {filtros.map(({ chave, label }) => (
                        <button
                            key={chave}
                            onClick={() => setFiltroAtivo(chave)}
                            style={{
                                backgroundColor: filtroAtivo === chave ? "#334155" : "white",
                                color: filtroAtivo === chave ? "white" : "#334155",
                                border: "1.5px solid #334155",
                                padding: "0.5rem 1rem",
                                fontSize: 16,
                                borderRadius: 6,
                                cursor: "pointer",
                                fontWeight: filtroAtivo === chave ? "600" : "400",
                                transition: "all 0.3s ease",
                                minWidth: 140,
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 10,
                    }}
                >
                    {ferramentasFiltradas.map(({ id, nome, img, alt, style }) => (
                        <div
                            key={id}
                            style={{
                                width: "140px",
                                backgroundColor: "#334155",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                overflow: "hidden",
                                textAlign: "center",
                                padding: "10px"
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
                                    height: 100,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "1rem",
                                }}
                            >
                                <img
                                    src={img}
                                    alt={alt}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                        ...style,
                                    }}
                                />
                            </div>
                            <div>
                                <h3
                                    style={{
                                        fontSize: "1.125rem",
                                        fontWeight: 600,
                                        color: "#ffffff",
                                        margin: 0,
                                        userSelect: "text",
                                    }}
                                >
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
