import React, { useEffect, useState } from "react";
import logo from "../../assets_optimized/logo3.webp";

export default function Sidebar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
   function handleScroll() {
  setScrolled(window.scrollY > 20);

  const sections = [
    "sobre",
    "jornada",
    "portfolio",
    "ferramentas",
    "services",
  ];

  const scrollPosition = window.scrollY + window.innerHeight / 2;

  let current = sections[0];

  sections.forEach((id) => {
    const section = document.getElementById(id);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = id;
      }
    }
  });

  setActiveSection(current);
}

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "sobre", label: "Sobre", icon: "uil-user" },
    { id: "jornada", label: "Jornada", icon: "uil-graduation-cap" },
    { id: "portfolio", label: "Projetos", icon: "uil-folder-open" },
    { id: "ferramentas", label: "Ferramentas", icon: "uil-wrench" },
    { id: "services", label: "Aptidão", icon: "uil-briefcase" },
  ];

  return (
    <>
      {/* NAVBAR TOPO */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
            ? "bg-[#102A43]/85 backdrop-blur-md shadow-lg"
            : "bg-[#102A43]/70 backdrop-blur-md"
          }`}
        style={{ boxShadow: "0 8px 20px 0 #ff66004d" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
          {/* LOGO */}
          <a href="#sobre" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-10 md:w-12 h-auto"
              loading="lazy"
            />
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-white transition-all duration-300
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  hover:bg-[#c5a059]/40
                  ${activeSection === link.id
                    ? "bg-[#c5a059]"
                    : ""
                  }
                `}
              >
                <i className={`uil ${link.icon} text-lg`}></i>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <i
              className={`uil ${isOpen ? "uil-times" : "uil-bars"
                } text-3xl`}
            ></i>
          </button>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col px-4 pb-4 gap-2 bg-[#1c1e22]/95 backdrop-blur-md">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-white transition-all duration-300
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                  hover:bg-[#102A43]
                  ${activeSection === link.id
                    ? "bg-[#102A43]"
                    : ""
                  }
                `}
              >
                <i className={`uil ${link.icon} text-lg`}></i>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ESPAÇAMENTO PARA NÃO FICAR ATRÁS DA NAVBAR */}
      <div className="h-16"></div>
    </>
  );
}