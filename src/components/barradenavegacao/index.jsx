import React, { useEffect, useState } from 'react';
import logo from "../../assets_optimized/logo2.webp";

export default function Sidebar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a
            href="#sobre"
            className="text-white hover:text-[#ffffff] transition-colors duration-300 text-sm md:text-base 
                 flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 rounded-md
                 hover:bg-[#ff6600] focus:bg-[#ff6600] focus:outline-none"
          >
            <i className="uil uil-user text-lg"></i>
            <span className="text-xs md:text-base font-medium whitespace-nowrap mt-1 md:mt-0">Sobre</span>
          </a>
          <a
            href="#portfolio"
            className="text-white hover:text-[#ffffff] transition-colors duration-300 text-sm md:text-base 
                 flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 rounded-md
                 hover:bg-[#ff6600] focus:bg-[#ff6600] focus:outline-none"
          >
            <i className="uil uil-folder-open text-lg"></i>
            <span className="text-xs md:text-base font-medium whitespace-nowrap mt-1 md:mt-0">Portfólio</span>
          </a>

          <a
            href="#ferramentas"
            className="text-white hover:text-[#ffffff] transition-colors duration-300 text-sm md:text-base 
                 flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 rounded-md
                 hover:bg-[#ff6600] focus:bg-[#ff6600] focus:outline-none"
          >
            <i className="uil uil-wrench text-lg"></i>
            <span className="text-xs md:text-base font-medium whitespace-nowrap mt-1 md:mt-0">Ferramentas</span>
          </a>
          <a
            href="#services"
            className="text-white hover:text-[#ffffff] transition-colors duration-300 text-sm md:text-base 
                 flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 rounded-md
                 hover:bg-[#ff6600] focus:bg-[#ff6600] focus:outline-none"
          >
            <i className="uil uil-briefcase text-lg"></i>
            <span className="text-xs md:text-base font-medium whitespace-nowrap mt-1 md:mt-0">Aptidão</span>
          </a>
          <a
            href="#contato"
            className="text-white hover:text-[#ffffff] transition-colors duration-300 text-sm md:text-base 
                 flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 rounded-md
                 hover:bg-[#ff6600] focus:bg-[#ff6600] focus:outline-none"
          >
            <i className="uil uil-envelope-alt text-lg"></i>
            <span className="text-xs md:text-base font-medium whitespace-nowrap mt-1 md:mt-0">Contato</span>
          </a>
        </nav>
      </div>

    </aside>
  );
}
