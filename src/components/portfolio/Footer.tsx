import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { navLinks } from "@/lib/portfolio-data";
import logo from "@/assets/logo3.webp";
import curriculo from "@/../public/curriculo-keilany-gabriel.pdf";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/keilany-g-900981250/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/keilanyg",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/keilanygabriell",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:keilanydes@gmail.com",
  },
];

export function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-border bg-navy-deep/60 pt-20 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid items-start gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* COLUNA 1 — LOGO */}
          <div className="min-w-0">
            <div className="flex w-[100px] items-center sm:w-[110px]">
              <img
                src={logo}
                alt="Logo Keilany Gabriel"
                className="h-auto w-full object-contain"
              />
            </div>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Product designer e desenvolvedora front-end, criando experiências
              digitais funcionais, acessíveis e visualmente consistentes.
            </p>
          </div>

          {/* COLUNA 2 — NAVEGAÇÃO */}
          <nav
            aria-label="Links do rodapé"
            className="min-w-0"
          >
            <h3 className="font-display text-lg">
              Navegação
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* COLUNA 3 — REDES */}
          <div className="min-w-0">
            <h3 className="font-display text-lg">
              Redes
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Vamos nos conectar? Acompanhe meu trabalho e projetos pelas
              redes.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      inline-flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      text-primary
                      transition-all
                      hover:-translate-y-0.5
                      hover:bg-primary
                      hover:text-primary-foreground
                    "
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>

            <a
              href={curriculo}
              download="curriculo-keilany-gabriel.pdf"
              className="
    mt-7
    inline-flex
    rounded-full
    border
    border-primary/50
    px-5
    py-2.5
    text-sm
    font-medium
    text-primary
    transition-colors
    hover:bg-primary
    hover:text-primary-foreground
  "
            >
              Baixar currículo
            </a>
          </div>

          {/* COLUNA 4 — CONTATO */}
          <div className="min-w-0">
            <h2 className="text-2xl leading-tight">
              Vamos tirar seu próximo{" "}
              <span className="text-gradient-gold">
                projeto
              </span>{" "}
              do papel
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Aberta a oportunidades como product designer, freelas de
              identidade visual e parcerias de longo prazo.
            </p>


            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:keilanydes@gmail.com"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "mailto:keilanydes@gmail.com";
                  }}
                  className="break-all transition-colors hover:text-primary"
                >
                  keilanydes@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="https://wa.me/5583981610350"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="break-all transition-colors hover:text-primary"

                >
                  +55 (83) 98161-0350
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-border
            py-8
            text-xs
            text-muted-foreground
            sm:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} Keilany Gabriel. Todos os direitos
            reservados.
          </p>

          <p>
            Design & Desenvolvimento
          </p>
        </div>
      </div>
    </footer>
  );
}    