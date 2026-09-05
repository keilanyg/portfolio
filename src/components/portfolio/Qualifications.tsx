import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

function Timeline({
  items,
}: {
  items: { period: string; title: string; place: string; detail: string }[];
}) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
      {items.map((item, i) => (
        <li key={item.title + item.period}>
          <Reveal delay={i * 80}>
            <span
              aria-hidden="true"
              className="absolute -left-[6px] mt-2 h-3 w-3 rounded-full border-2 border-primary bg-background"
            />
            <p className="eyebrow">{item.period}</p>
            <h4 className="mt-2 font-display text-lg text-foreground sm:text-xl">{item.title}</h4>
            <p className="mt-1 text-sm text-primary/90">{item.place}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function Qualifications() {
  return (
    <section id="qualificacoes" className="py-8 lg:py-15">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Qualificações"
          title="Formação e experiência profissional"
          description="Uma trajetória construída entre estudo contínuo e projetos reais."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-2xl">Cursos e formação</h3>
            </Reveal>
            <Timeline items={education} />
          </div>

          <div>
            <Reveal className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-2xl">Experiência profissional</h3>
            </Reveal>
            <Timeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  );
}
