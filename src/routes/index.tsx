import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Qualifications } from "@/components/portfolio/Qualifications";
import { Projects } from "@/components/portfolio/Projects";
import { Tools } from "@/components/portfolio/Tools";
import { Areas } from "@/components/portfolio/Areas";
import { Footer } from "@/components/portfolio/Footer";

const title = "Keilany Gabriel | UI/UX Designer e Desenvolvedora Web";
const description =
  "Portfólio de Keilany Gabriel: projetos de UI/UX, design systems e identidade visual, com qualificações, ferramentas e áreas de atuação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Qualifications />
        <Projects />
        <Tools />
        <Areas />
      </main>
      <Footer />
    </div>
  );
}
