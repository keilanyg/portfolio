import React, { useEffect, useState } from 'react';
import logo from "../../assets_optimized/logo2.webp";

export default function Sidebar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

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
            // marca como ativa se qualquer parte da seção estiver visível
            current = id;
          }
        }
      });

      setActiveSection(current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // checa no load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const links = [
    { id: "sobre", label: "Sobre", icon: "uil-user" },
    { id: "jornada", label: "Jornada", icon: "uil-graduation-cap" },
    { id: "portfolio", label: "Portfólio", icon: "uil-folder-open" },
    { id: "ferramentas", label: "Ferramentas", icon: "uil-wrench" },
    { id: "services", label: "Aptidão", icon: "uil-briefcase" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-20 md:w-56 z-50 flex flex-col justify-between items-center py-8 px-2 md:px-4 transition-all duration-300
        ${scrolled
          ? 'bg-[#1c1e22]/90 backdrop-blur-md shadow-lg border-none'
          : 'bg-[#1c1e22] border border-none'
        }
      `}
      style={{ boxShadow: '0 8px 20px 0 #ff66004d' }}
    >
      <div className="flex flex-col items-center md:items-start w-full">
        <img src={logo} alt="logo, letra K" className="w-10 md:w-20 mb-8" loading="lazy" />

        <nav className="flex flex-col gap-4 w-full">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-white transition-colors duration-300 text-sm md:text-base 
                flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 rounded-md
                hover:bg-[#ff6600] focus:outline-none
                ${activeSection === link.id ? 'bg-[#ff6600]' : ''}
              `}
            >
              <i className={`uil ${link.icon} text-lg`}></i>
              <span className="text-xs md:text-base font-medium whitespace-nowrap mt-1 md:mt-0">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>

    </aside>
  );
}
