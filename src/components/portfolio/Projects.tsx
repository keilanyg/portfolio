import { useEffect, useState } from "react";
import { ExternalLink, Figma, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

function ProjectGallery({ project }: { project: Project }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} opts={{ loop: true }} className="group/gallery">
        <CarouselContent>
          {project.images.map((image) => (
            <CarouselItem key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                width={1400}
                height={900}
                loading="lazy"
                className="aspect-[16/10] w-full rounded-xl border border-border object-cover sm:aspect-[16/9] lg:aspect-[4/3]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 hidden border-border bg-navy-deep/80 text-primary hover:bg-primary hover:text-primary-foreground sm:flex sm:left-3" />
        <CarouselNext className="right-2 hidden border-border bg-navy-deep/80 text-primary hover:bg-primary hover:text-primary-foreground sm:flex sm:right-3" />
      </Carousel>

      <div className="mt-4 flex items-center justify-center gap-2">
        {project.images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Ver imagem ${i + 1} de ${project.title}`}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              current === i ? "w-7 bg-primary" : "w-3 bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card resumido (estado fechado)                                      */
/* ------------------------------------------------------------------ */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const firstImage = project.images[0];

  return (
    <article className="surface-card group flex flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary sm:rounded-3xl">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`Abrir detalhes do projeto ${project.title}`}
      >
        <img
          src={firstImage?.src}
          alt={firstImage?.alt ?? project.title}
          width={1400}
          height={900}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </button>

      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <p className="eyebrow text-[11px] sm:text-xs">
          {project.category} · {project.year}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="mt-2 text-left text-lg font-semibold transition-colors hover:text-primary sm:text-xl lg:text-2xl"
        >
          {project.title}
        </button>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-3">
          <a
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:px-4"
          >
            <Figma className="h-4 w-4" />
            Ver Figma
          </a>
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:px-4"
          >
            <ExternalLink className="h-4 w-4" />
            Ver site
          </a>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Conteúdo completo do modal (o antigo "Reveal")                      */
/* ------------------------------------------------------------------ */
function ProjectModalContent({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14 xl:gap-16">
      <ProjectGallery project={project} />

      <div>
        <p className="eyebrow">
          {project.category} · {project.year}
        </p>
        <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Figma className="h-4 w-4" />
            Ver Figma
          </a>
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Ver site
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Seção principal                                                     */
/* ------------------------------------------------------------------ */
export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos selecionados"
          description="Cada projeto abaixo traz o contexto, as imagens do processo e os links para o arquivo no Figma e para o site publicado."
        />

        <Reveal className="mt-10 sm:mt-12 lg:mt-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={() => setActiveProject(project)}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <Dialog
        open={!!activeProject}
        onOpenChange={(open) => !open && setActiveProject(null)}
      >
        <DialogContent
          className={cn(
            "overflow-y-auto rounded-2xl p-5 sm:rounded-3xl sm:p-8 lg:p-10 xl:p-12",
            "w-[95vw] max-w-[95vw] sm:w-[90vw] sm:max-w-3xl",
            "lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",
            "max-h-[92vh] sm:max-h-[88vh]",
          )}
        >
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full border border-border bg-background p-2 
          text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
          {activeProject && <ProjectModalContent project={activeProject} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}