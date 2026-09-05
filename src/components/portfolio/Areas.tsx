"use client";

import { useMemo, useState } from "react";
import { areas } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

type Filter = "design" | "frontend";

export function Areas() {
  const [activeFilter, setActiveFilter] = useState<Filter>("design");

  const filteredAreas = useMemo(() => {
    return areas.filter((area) => area.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="atuacao" className="py-10 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Onde meu conhecimento entrega valor"
          description="Frentes que domino e combino conforme a necessidade de cada projeto."
        />

        {/* Filtros */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card/60 p-1">
            <button
              type="button"
              onClick={() => setActiveFilter("design")}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                activeFilter === "design"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Design
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("frontend")}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                activeFilter === "frontend"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Front-End
            </button>
          </div>
        </div>

        {/* Nível */}
        <div className="mt-8 text-center">
          <span className="text-sm text-muted-foreground">
            Nível:{" "}
            <strong className="font-medium text-foreground">
              Intermediário — Avançado
            </strong>
          </span>
        </div>

        {/* Áreas */}
        <div
          key={activeFilter}
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 70}
              className="bg-card/85"
            >
              <article className="group h-full p-7 transition-colors hover:bg-secondary/70 lg:p-9">
                <span className="font-display text-sm text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-xl transition-colors group-hover:text-primary sm:text-2xl">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>


      </div>
    </section>
  );
}