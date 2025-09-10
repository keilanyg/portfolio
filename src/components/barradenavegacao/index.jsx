import React, { useEffect, useState } from "react";
import logo from "../../assets_optimized/logo2.webp";

export default function Sidebar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);

      const sections = ["sobre", "jornada", "portfolio", "ferramentas", "services"];
      let current = sections[0];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
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
    { id: "portfolio", label: "Portfólio", icon: "uil-folder-open" },
    { id: "ferramentas", label: "Ferramentas", icon: "uil-wrench" },
    { id: "services", label: "Aptidão", icon: "uil-briefcase" },
  ];

  return (
    <>
      {/* Top bar no mobile */}
      <div className="fixed top-0 left-0 w-full h-14 bg-[#1c1e22] z-50 flex items-center justify-between px-4 md:hidden shadow-md">
        <img src={logo} alt="logo" className="w-10 h-auto" loading="lazy" />
        <button
          className="text-white p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <i className={`uil ${isOpen ? "uil-times" : "uil-bars"} text-2xl`}></i>
        </button>

      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-48 md:w-40 z-40 flex flex-col justify-between items-center py-6 px-3 transition-transform duration-300
          ${scrolled
            ? "bg-[#1c1e22]/90 backdrop-blur-md shadow-lg border-none"
            : "bg-[#1c1e22] border border-none"
          }
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
        style={{ boxShadow: "0 8px 20px 0 #ff66004d" }}
      >
        <div className="flex flex-col items-center md:items-start w-full mt-14 md:mt-0">
          {/* Logo só aparece dentro da sidebar no desktop */}
          <img
            src={logo}
            alt="logo, letra K"
            className="hidden md:block w-10 md:w-16 mb-6"
            loading="lazy"
          />

          <nav className="flex flex-col gap-3 w-full">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-white transition-colors duration-300 text-sm md:text-base 
                  flex flex-col md:flex-row items-center gap-1 md:gap-2 px-2 py-2 rounded-md
                  hover:bg-[#ff6600] focus:outline-none
                  ${activeSection === link.id ? "bg-[#ff6600]" : ""}
                `}
              >
                <i className={`uil ${link.icon} text-lg`}></i>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap mt-1 md:mt-0">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
