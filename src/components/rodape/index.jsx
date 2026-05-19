import IconeUnicons from "../Camposdapag/icones/index";
import logo from "../../assets_optimized/logo3.webp";


export function Rodape() {
    return (
        <footer className="w-full p-8 mt-10 text-white bg-[#102A43]" id="contato">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 list-none text-center md:justify-between">
                <img
                    src={logo}
                    alt="logo com formato de letra K"
                    className="w-16 sm:w-20 md:w-24"
                    loading="lazy"
                />
                <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-8 list-none hover:text-[#102A43] focus:text-[#102A43]">
                    <li>
                        <a
                            href="https://github.com/keilanyg"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <IconeUnicons iconClass="uil uil-github" tamanho="20px sm:24px" cor="#ffffff" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/keilany-g-900981250/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <IconeUnicons iconClass="uil uil-linkedin" tamanho="20px sm:24px" cor="#ffffff" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/keilanygabriell"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <IconeUnicons iconClass="uil uil-instagram" tamanho="20px sm:24px" cor="#ffffff" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:keilanydes@gmail.com"
                            aria-label="Email"
                        >
                            <IconeUnicons iconClass="uil uil-envelope" tamanho="20px sm:24px" cor="#ffffff" />
                        </a>
                    </li>
                </ul>
            </div>
            <h6 className="text-center font-normal text-white text-[5px] sm:text-[7px] md:text-sm">
                &copy; {new Date().getFullYear()} Keilany Gabriel | Portfólio
                <p className="text-[3px] sm:text-[7px] text-white/70 uppercase tracking-[0.2em]">
                    Atualizado em 19/05/2026
                </p>
            </h6>
        </footer>
    );
}
