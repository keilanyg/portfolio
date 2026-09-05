"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo3.webp";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-navy-deep/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20"
      >
        {/* LOGO */}
        <a
          href="#inicio"
          onClick={handleNavClick}
          aria-label="Ir para o início"
          className="flex shrink-0 items-center"
        >
          <div className="flex h-[60px] w-[150px] items-center sm:h-[64px] sm:w-[175px]">
            <img
              src={logo}
              alt="Logo Keilany Gabriel"
              className="h-full w-full object-contain"
            />
          </div>
        </a>

        {/* MENU DESKTOP */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="
                  relative
                  text-sm
                  text-muted-foreground
                  transition-colors
                  duration-200
                  hover:text-primary
                  after:absolute
                  after:-bottom-1.5
                  after:left-0
                  after:h-px
                  after:w-0
                  after:bg-primary
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="
            inline-flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            border
            border-border
            text-primary
            transition-colors
            duration-200
            hover:bg-secondary
            lg:hidden
          "
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={cn(
          "overflow-hidden border-t bg-navy-deep/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open
            ? "max-h-[500px] border-border opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="
                  block
                  rounded-md
                  px-3
                  py-3
                  text-base
                  text-foreground/90
                  transition-colors
                  duration-200
                  hover:bg-secondary
                  hover:text-primary
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}