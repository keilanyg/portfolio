import React, { useEffect, useState } from 'react'; 
import logo from "../../assets/logo2.png";

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
      className={`fixed top-0 left-0 h-full w-20 md:w-56 z-50 flex flex-col justify-between py-8 px-4 transition-all duration-300
        ${scrolled 
          ? 'bg-[#1c1e22]/90 backdrop-blur-md shadow-lg border-none'
          : 'bg-[#1c1e22] border border-none'
        }
      `}
      style={{ boxShadow: '0 8px 32px 0 #ff66004d' }}
    >
      <div className="flex flex-col items-center md:items-start">
        <img src={logo} alt="logo, letra K" className="md:w-20 mb-8" />

        <nav className="flex flex-col gap-8 w-full">
          <a 
            href="#sobre" 
            className="text-white hover:text-[#ffffff] transition-colors duration-300 text-sm md:text-base flex items-center gap-3 px-3 py-2 rounded-md
                       hover:bg-[#ff6600] focus:bg-[#ff6600] focus:outline-none"
          >
            <i className="uil uil-user text-lg"></i>
            <span className="hidden md:inline font-medium">Sobre</span>
          </a>
          <a 
            href="#services" 
            className="text-white hover:text-[#ffffff] transition-colors duration-300 text-sm md:text-base flex items-center gap-3 px-3 py-2 rounded-md
                       hover:bg-[#ff6600] focus:bg-[#ff6600] focus:outline-none"
          >
            <i className="uil uil-briefcase text-lg"></i>
            <span className="hidden md:inline font-medium">Serviços</span>
          </a>
          <a 
            href="#contato" 
            className="text-white hover:text-[#ffffff] transition-colors duration-300 text-sm md:text-base flex items-center gap-3 px-3 py-2 rounded-md
                       hover:bg-[#ff6600] focus:bg-[#ff6600] focus:outline-none"
          >
            <i className="uil uil-envelope-alt text-lg"></i>
            <span className="hidden md:inline font-medium">Contato</span>
          </a>
        </nav>
      </div>

      <div className="text-white text-xs text-center mt-8 md:mt-0 select-none">
        © {new Date().getFullYear()} Seu Nome
      </div>
    </aside>
  );
}
