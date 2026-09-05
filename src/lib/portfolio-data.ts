import logoonco from "../assets/Logos/OncoCard.png";
import logoporto from "../assets/Logos/Porto Laticinio.png";
import logotelabrasil from "../assets/Logos/Tela Brasil.png";

import html from "../assets/ferramentas/html.webp";
import css from "../assets/ferramentas/css.webp";
import python from "../assets/ferramentas/python.webp";
import accessibilityInsights from "../assets/ferramentas/accessibility-insights.webp";
import wave from "../assets/ferramentas/wave.webp";
import bootstrap from "../assets/ferramentas/bootstrap.webp";
import sass from "../assets/ferramentas/sass.webp";
import reactLogo from "../assets/ferramentas/react.webp";
import api from "../assets/ferramentas/api.webp";
import typescript from "../assets/ferramentas/typescript.png";
import tailwind from "../assets/ferramentas/tailwind-css.webp";
import jira from "../assets/ferramentas/jira.webp";
import confluence from "../assets/ferramentas/confluence.webp";
import postgresql from "../assets/ferramentas/postgresql.webp";
import django from "../assets/ferramentas/django.webp";
import figma from "../assets/ferramentas/figma.webp";
import miro from "../assets/ferramentas/miro.webp";
import cypress from "../assets/ferramentas/cypress.webp";
import illustrator from "../assets/ferramentas/illustrator.webp";
import adobe from "../assets/ferramentas/adobe-xd.webp";
import clickup from "../assets/ferramentas/clickup.webp";
import trello from "../assets/ferramentas/trello.webp";
import js from "../assets/ferramentas/javascript.webp";
import next from "../assets/ferramentas/nextjs.webp";
import swagger from "../assets/ferramentas/swagger.webp";
import claude from "../assets/ferramentas/claude-ai.webp";
import photoshop from "../assets/ferramentas/photoshop.webp";
import chatgpt from "../assets/ferramentas/chatgpt.webp";

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#qualificacoes", label: "Qualificações" },
  { href: "#projetos", label: "Projetos" },
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#contato", label: "Contato" },
];

export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  images: { src: string; alt: string }[];
  figma: string;
  site: string;
};

export const projects: Project[] = [
  {
    title: "Porto Laticínios",
    category: "UX/UI Design · Desenvolvimento Web",
    year: "2026",
    description:
      "Desenvolvimento do site institucional da Porto Laticínios, unindo UX/UI Design e front-end para criar uma experiência digital moderna e estratégica. O projeto apresenta a marca, seus produtos e diferenciais, com navegação intuitiva, interface responsiva e pontos de conversão voltados ao contato comercial e realização de pedidos.",
    tags: ["UX/UI Design", "Front-end", "Responsividade", "Conversão"],
    images: [
      { src: logoporto, alt: "Logo" },
    ],
    figma: "https://www.figma.com/design/1pEx9D7IBeRh55SzIokNTV/Untitled?node-id=0-1&t=hs8WX0qrz4xWf0Wz-1",
    site: "https://portolaticinios.com.br/",
  },
  {
    title: "OncoCard",
    category: "UX/UI Design · Desenvolvimento Web",
    year: "2026",
    description:
      "Desenvolvimento da plataforma OncoCard, um cartão de benefícios voltado à área da saúde. O projeto uniu UX/UI Design e desenvolvimento front-end para criar uma experiência digital simples e intuitiva, facilitando o acesso dos usuários a benefícios, descontos e serviços parceiros.",
    tags: ["UX/UI Design", "Front-end", "Usabilidade", "Responsividade"],
    images: [
      { src: logoonco, alt: "Logo" },
    ],
    figma: "https://www.figma.com/design/4mAfq44mJvR0jMqIKN0clF/Telas?node-id=327-149&t=0Yr7iauEizAhaNj8-1",
    site: "https://oncocard.com.br/",
  },
  {
    title: "Tela Brasil",
    category: "UX/UI Design",
    year: "2024 - 2025",
    description:
      "Desenvolvimento da experiência UX/UI para a Tela Brasil, uma plataforma de streaming dedicada ao cinema nacional. O projeto foi pensado com foco em acessibilidade e inclusão, criando uma experiência intuitiva e fluida para diferentes públicos, incluindo escolas, bibliotecas e instituições de ensino.",
    tags: ["UX Research", "Acessibilidade", "Design Inclusivo", "Protótipos"],
    images: [
      { src: logotelabrasil, alt: "Logo" },
    ],
    figma: "https://www.figma.com/design/4mAfq44mJvR0jMqIKN0clF/Telas?node-id=332-149&t=CjciMItprno9FR7e-1",
    site: "https://telabrasil.cultura.gov.br/",
  },
];

export const education = [
  {
    period: "2021 — 2025",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    place: "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN)",
  },
];

export const experience = [
  {
    period: "Abr. 2026 — Atualmente",
    title: "UX/UI Designer com atuação em Front-end",
    place: "OncoCard",
    detail:
      "Aprimorei interfaces e desenvolvi melhorias para sites e sistemas web de vendas e controle.",
  },
  {
    period: "Jan. 2024 — Jun. 2025",
    title: "UX/UI Designer",
    place: "Plataforma de Streaming Nacional - Tela Brasil",
    detail:
      "Desenvolvimento de interfaces UX/UI responsivas e inclusivas para a Tela Brasil, plataforma nacional de streaming dedicada ao cinema brasileiro.",
  },
];

export const ferramentas = [
  {
    id: 2,
    categoria: "frontend",
    nome: "HTML",
    img: html,
    alt: "Logo HTML",
  },
  {
    id: 3,
    categoria: "frontend",
    nome: "CSS",
    img: css,
    alt: "Logo CSS",
  },
  {
    id: 4,
    categoria: "backend",
    nome: "Python",
    img: python,
    alt: "Logo Python",
  },
  {
    id: 5,
    categoria: "accessibility",
    nome: "Insights",
    img: accessibilityInsights,
    alt: "Logo Accessibility Insights",
  },
  {
    id: 6,
    categoria: "accessibility",
    nome: "WAVE",
    img: wave,
    alt: "Logo WAVE Accessibility",
  },
  {
    id: 8,
    categoria: "frontend",
    nome: "Bootstrap",
    img: bootstrap,
    alt: "Logo Bootstrap",
  },
  {
    id: 9,
    categoria: "frontend",
    nome: "Sass",
    img: sass,
    alt: "Logo Sass",
  },
  {
    id: 12,
    categoria: "frontend",
    nome: "React",
    img: reactLogo,
    alt: "Logo React",
  },
  {
    id: 13,
    categoria: "backend",
    nome: "API REST",
    img: api,
    alt: "Logo API",
  },
  {
    id: 14,
    categoria: "frontend",
    nome: "TypeScript",
    img: typescript,
    alt: "Logo TypeScript",
  },
  {
    id: 15,
    categoria: "frontend",
    nome: "Tailwind",
    img: tailwind,
    alt: "Logo Tailwind",
  },
  {
    id: 16,
    categoria: "design",
    nome: "Jira",
    img: jira,
    alt: "Logo Jira",
  },
  {
    id: 17,
    categoria: "design",
    nome: "Confluence",
    img: confluence,
    alt: "Logo Confluence",
  },
  {
    id: 18,
    categoria: "backend",
    nome: "PostgreSQL",
    img: postgresql,
    alt: "Logo PostgreSQL",
  },
  {
    id: 19,
    categoria: "backend",
    nome: "Django",
    img: django,
    alt: "Logo Django",
  },
  {
    id: 20,
    categoria: "design",
    nome: "Figma",
    img: figma,
    alt: "Logo Figma",
  },
  {
    id: 24,
    categoria: "design",
    nome: "Miro",
    img: miro,
    alt: "Logo Miro",
  },
  {
    id: 25,
    categoria: "accessibility",
    nome: "Cypress",
    img: cypress,
    alt: "Logo Cypress",
  },
  {
    id: 27,
    categoria: "design",
    nome: "Illustrator",
    img: illustrator,
    alt: "Logo Illustrator",
  },
  {
    id: 28,
    categoria: "design",
    nome: "Adobe XD",
    img: adobe,
    alt: "Logo Adobe XD",
  },
  {
    id: 29,
    categoria: "design",
    nome: "ClickUp",
    img: clickup,
    alt: "Logo ClickUp",
  },
  {
    id: 30,
    categoria: "design",
    nome: "Trello",
    img: trello,
    alt: "Logo Trello",
  },
  {
    id: 31,
    categoria: "frontend",
    nome: "Next.js",
    img: next,
    alt: "Logo Next.js",
  },
  {
    id: 32,
    categoria: "frontend",
    nome: "JavaScript",
    img: js,
    alt: "Logo JavaScript",
  },
  {
    id: 33,
    categoria: "backend",
    nome: "Swagger",
    img: swagger,
    alt: "Logo Swagger",
  },
  {
    id: 34,
    categoria: "design",
    nome: "Claude IA",
    img: claude,
    alt: "Logo Claude AI",
  },
  {
    id: 35,
    categoria: "design",
    nome: "Photoshop",
    img: photoshop,
    alt: "Logo Photoshop",
  },
  {
    id: 36,
    categoria: "design",
    nome: "ChatGPT",
    img: chatgpt,
    alt: "Logo ChatGPT",
  },
];

export const filtros = [
  {
    chave: "design",
    label: "Design, Gestão e IA",
  },
  {
    chave: "accessibility",
    label: "Testes e Acessibilidade",
  },
  {
    chave: "frontend",
    label: "Front-End",
  },
  {
    chave: "backend",
    label: "Back-End e Integrações",
  },
];

export const areas = [
  {
    category: "design",
    title: "UI/UX Design",
    description:
      "Interfaces claras, consistentes e responsivas, com foco em hierarquia visual, usabilidade e objetivos do produto.",
  },
  {
    category: "design",
    title: "UX & Pesquisa",
    description:
      "Pesquisa com usuários, levantamento de requisitos, mapas de jornada e testes de usabilidade para apoiar decisões com evidências.",
  },
  {
    category: "design",
    title: "Design Systems",
    description:
      "Criação de tokens, componentes reutilizáveis e documentação para manter produtos consistentes e escaláveis.",
  },
  {
    category: "design",
    title: "Design Responsivo & Acessibilidade",
    description:
      "Desenvolvimento de interfaces adaptáveis a diferentes dispositivos, seguindo boas práticas de acessibilidade e princípios da WCAG.",
  },
  {
    category: "design",
    title: "Prototipação",
    description:
      "Criação de wireframes, protótipos funcionais, mockups e microinterações para validar experiências antes do desenvolvimento.",
  },

  {
    category: "frontend",
    title: "Desenvolvimento de Interfaces",
    description:
      "Construção de interfaces modernas, interativas, responsivas e acessíveis, com componentes reutilizáveis.",
  },
  {
    category: "frontend",
    title: "Tecnologias & Integrações",
    description:
      "React.js, Next.js, APIs REST, Git e GitHub, com integração entre design e desenvolvimento.",
  },
  {
    category: "frontend",
    title: "Performance & SEO",
    description:
      "Boas práticas de HTML semântico, SEO técnico, otimização de carregamento e desempenho de páginas e imagens.",
  },
  {
    category: "frontend",
    title: "Metodologias",
    description:
      "Familiaridade com Design Thinking, processos de ideação, prototipação e estruturação de sistemas.",
  },
];

export const stats = [
  { value: "4+", label: "Anos de experiência" },
  { value: "45", label: "Projetos entregues" },
  { value: "18", label: "Marcas atendidas" },
  { value: "12", label: "Certificações" },
];
