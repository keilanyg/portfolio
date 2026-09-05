import { ArrowDown, Download, Sparkles } from "lucide-react";
import profile from "@/assets/perfil.webp";
import { Reveal } from "./Reveal";
import curriculo from "@/../public/curriculo-keilany-gabriel.pdf";

export function Hero() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Efeito de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-[90px]"
      />

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          items-center
          gap-10
          px-5
          sm:px-8
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-12
        "
      >
        {/* CONTEÚDO */}
        <Reveal>
          {/* TAG */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-border
              bg-secondary/60
              px-3
              py-1
              text-[11px]
              text-muted-foreground
            "
          >
            <Sparkles className="h-3 w-3 text-primary" />
            Disponível para novos projetos
          </span>

          {/* TÍTULO */}
          <h1
            className="
              mt-5
              text-3xl
              leading-[1.08]
              tracking-tight
              sm:text-3xl
              lg:text-4xl
              xl:text-5xl
            "
          >
            Sou{" "}
            <span className="text-gradient-gold">
              Keilany Gabriel
            </span>
            <span className="mt-1.5 block text-foreground/90">
              UX/UI Designer | Desenvolvedora Web
            </span>
          </h1>

          {/* DESCRIÇÃO */}
          <p
            className="
              mt-5
              max-w-lg
              text-sm
              leading-relaxed
              text-muted-foreground
              sm:text-base
            "
          >
            Desenvolvedora Front-end com ênfase em UX/UI Design,
            focada na criação de interfaces acessíveis e inclusivas.
            Experiência em desenvolvimento de soluções web,
            otimização de fluxos e melhoria da experiência do usuário.
          </p>

          {/* BOTÕES */}
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <a
              href={curriculo}
              download="curriculo-keilany-gabriel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-primary
                px-5
                py-2.5
                text-xs
                font-semibold
                text-primary-foreground
                shadow-[var(--shadow-gold)]
                transition-transform
                hover:-translate-y-0.5
              "
            >
              <Download className="h-3.5 w-3.5" />
              Baixar currículo
            </a>

            <a
              href="#projetos"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-border
                px-5
                py-2.5
                text-xs
                font-semibold
                text-foreground
                transition-colors
                hover:border-primary
                hover:text-primary
              "
            >
              Ver projetos
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        {/* FOTO */}
        <Reveal
          delay={120}
          className="order-first lg:order-none"
        >
          <div className="relative mx-auto w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[330px]">
            {/* Borda decorativa */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                translate-x-3
                translate-y-3
                rounded-[1.5rem]
                border
                border-primary/40
              "
            />

            {/* Imagem */}
            <img
              src={profile}
              alt="Retrato de Keilany Gabriel, designer de produto"
              width={900}
              height={1100}
              className="
                relative
                aspect-[4/5]
                w-full
                rounded-[1.5rem]
                object-cover
                shadow-[var(--shadow-elegant)]
              "
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}