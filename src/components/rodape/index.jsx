import IconeUnicons from "../Camposdapag/icones/index";
import logo from "../../assets/logo2.png";


export function Rodape() {
    return (
        <footer className="w-full p-8 text-white">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <img
                    src={logo}
                    alt="logo com formato de letra K"
                    className="w-20"
                />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 hover:text-[#ff6600] focus:text-[#ff6600]" >
                    <li>
                        <a
                            href="https://github.com/keilanyg"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <IconeUnicons iconClass="uil uil-github" tamanho="24px" cor="#ffffff" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/keilany-g-900981250/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <IconeUnicons iconClass="uil uil-linkedin" tamanho="24px" cor="#ffffff" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/keilanygabriell"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <IconeUnicons iconClass="uil uil-instagram" tamanho="24px" cor="#ffffff" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:keilanydes@gmail.com"
                            aria-label="Email"
                        >
                            <IconeUnicons iconClass="uil uil-envelope" tamanho="24px" cor="#ffffff" />
                        </a>
                    </li>
                </ul>
            </div>
            <h5 className="text-center font-normal text-white">
                &copy; {new Date().getFullYear()} Keilany Gabriel | Portfólio
            </h5>
        </footer>
    );
}
