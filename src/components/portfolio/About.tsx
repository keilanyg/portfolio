import { Compass, Layers, PenTool } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const pillars = [
  {
    icon: Compass,
    title: "Estratégia primeiro",
    text: "Entendo o negócio e as pessoas antes de abrir o Figma. Design sem contexto é decoração.",
  },
  {
    icon: PenTool,
    title: "Cuidado no detalhe",
    text: "Tipografia, espaçamento e ritmo visual tratados com o mesmo rigor da estrutura.",
  },
  {
    icon: Layers,
    title: "Entrega que escala",
    text: "Componentes documentados e handoff claro para o time de engenharia seguir sem atrito.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Design com propósito, do conceito à entrega"
          description="Sou designer há mais de quatro anos, atuando entre produto digital e identidade visual. Gosto de projetos que exigem pensar estrutura: fluxos longos, muita informação e a necessidade de deixar tudo simples para quem usa."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90}>
              <article className="surface-card h-full rounded-2xl p-7 transition-colors hover:border-primary/50">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <pillar.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
