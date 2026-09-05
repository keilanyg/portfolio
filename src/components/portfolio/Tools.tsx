import { SectionHeading } from "./Reveal";
import { useState } from "react";
import { filtros, ferramentas } from "@/lib/portfolio-data";


export function Tools() {
  const [filtroAtivo, setFiltroAtivo] = useState("design");

  const ferramentasFiltradas = ferramentas.filter(
    (ferramenta) => ferramenta.categoria === filtroAtivo
  );

  return (
    <section id="ferramentas" className="py-10 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Ferramentas"
          title="O que uso no dia a dia"
          description="Domínio prático das ferramentas de design e do essencial de front-end para conversar de igual para igual com o time de desenvolvimento."
        />

        <div className="mx-auto max-w-5xl">
          {/* Filtros */}
          <div
            role="tablist"
            aria-label="Categorias de ferramentas"
            className="mt-10 mb-10 flex flex-wrap justify-center gap-2"
          >
            {filtros.map(({ chave, label }) => {
              const isActive = filtroAtivo === chave;

              return (
                <button
                  key={chave}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFiltroAtivo(chave)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a75e] ${isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Grid de ferramentas */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6">
            {ferramentasFiltradas.map(({ id, nome, img, alt }) => (
              <div
                key={id}
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-[#1C2541] px-3 py-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#c6a75e]/50"
              >
                <img
                  src={img}
                  alt={alt}
                  loading="lazy"
                  className="max-h-8 w-auto object-contain sm:max-h-9"
                />

                <h3 className="text-center text-xs leading-tight font-medium text-white sm:text-sm">
                  {nome}
                </h3>
              </div>
            ))}
          </div>

          {/* Mensagem caso não existam ferramentas */}
          {ferramentasFiltradas.length === 0 && (
            <div className="py-10 text-center text-sm text-white/50">
              Nenhuma ferramenta encontrada nesta categoria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}