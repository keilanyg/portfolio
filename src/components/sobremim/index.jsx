import Fotodeperfil from "../../assets_optimized/fotoperfil2.webp";
import documentoPDF from "./Currículo-Keilany Gabriel.pdf";

const info = [
  { label: "Atuação", value: "UX/UI Design & Front-end" },
  { label: "Foco", value: "Acessibilidade digital" },
  { label: "Ferramentas", value: "Figma, React, Tailwind" },
  { label: "Disponibilidade", value: "Aberta a novos projetos" },
];

const SobreMim = () => {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 w-full bg-[#10162B] sm:py-24 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        {/* Foto com blobs decorativos, como no print */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]">
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#c6a75e]/70"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-5 -right-4 w-16 h-16 rounded-full bg-[#c6a75e]/40"
              aria-hidden="true"
            />
            <img
              src={Fotodeperfil}
              alt="Keilany Gabriel segurando um tablet"
              loading="lazy"
              className="relative z-10 w-full h-full object-cover rounded-full ring-4 ring-[#c6a75e]/30"
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-[#c6a75e]/50 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#c6a75e] mb-6">
            Sobre mim
          </span>

          <h2 className="text-white text-[26px] sm:text-3xl lg:text-[34px] font-semibold leading-tight mb-5">
            Interfaces acessíveis que fazem sentido para quem usa
          </h2>

          <p className="text-white/70 text-[15px] sm:text-base leading-7 max-w-[52ch] mx-auto lg:mx-0">
            Desenvolvedora Front-end com ênfase em UX/UI Design, focada na
            criação de interfaces acessíveis e inclusivas. Experiência em
            desenvolvimento de soluções web, otimização de fluxos e melhoria
            da experiência do usuário.
          </p>

          {/* Ficha de informações — equivalente ao card Name/Phone/Email do print */}
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 bg-[#1C2541] rounded-xl border border-white/5 px-6 py-6 max-w-md mx-auto lg:mx-0">
            {info.map(({ label, value }) => (
              <div key={label} className="text-left">
                <p className="text-[#c6a75e] text-xs font-medium mb-1">
                  {label}:
                </p>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href={documentoPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#c6a75e] hover:text-[#c6a75e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10162B] focus-visible:ring-[#c6a75e]"
            >
              Baixar currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;