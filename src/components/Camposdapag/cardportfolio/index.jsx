import { useState, useEffect } from "react";
import TituloSecao from "../tituloSubtitulo/index";
import "./index.scss";
import img2 from "../../../assets/works/Prontuario_1.png";

const projects = [
    {
        title: "Prontuário (Mobile)",
        year: 2023,
        short:
            "Aplicativo mobile para gestão ágil de prontuários médicos, com interface simples e intuitiva.",
        long:
            "Desenvolvido como projeto acadêmico, o Prontuário Mobile oferece uma solução prática para profissionais da saúde gerenciarem informações de pacientes. Permite cadastro e acompanhamento de dados pessoais e histórico clínico, com funcionalidades como login seguro, gerenciamento de usuários, painel de controle, listagem e cadastro de pacientes, inserção de itens e visualização detalhada do perfil de cada paciente. O design prioriza usabilidade e acessibilidade para otimizar a rotina médica.",
        descriptionStrong: "Sistema de Gerenciamento de Prontuário do Paciente",
        functionalities: [
            "Login",
            "Cadastro de usuários",
            "Painel de controle",
            "Listagem de pacientes",
            "Cadastro de itens",
            "Perfil do paciente",
        ],
        images: [img2], // adicionei aqui a propriedade images com a imagem importada
    },
];

export default function Portfolio() {
    const [modalActive, setModalActive] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function openModal(projectIndex) {
        setCurrentProjectIndex(projectIndex);
        setCurrentImageIndex(0);
        setModalActive(true);
    }

    function closeModal() {
        setModalActive(false);
    }

    function nextImage() {
        const project = projects[currentProjectIndex];
        setCurrentImageIndex(
            (currentImageIndex + 1) % project.images.length
        );
    }

    function prevImage() {
        const project = projects[currentProjectIndex];
        setCurrentImageIndex(
            (currentImageIndex - 1 + project.images.length) % project.images.length
        );
    }
    useEffect(() => {
        if (modalActive) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [modalActive]);

    const project = projects[currentProjectIndex];

    return (
        <section id="portfolio">
            <TituloSecao subtitulo="Meus projetos" tituloPrincipal="Portfolio" />

            <div className="grid">
                {projects.map((proj, index) => (
                    <div
                        key={index}
                        className="card"
                        onClick={() => openModal(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") openModal(index);
                        }}
                    >
                        <img src={proj.images[0]} alt={`Projeto ${index + 1}`} />
                        <div className="card-content">
                            <div className="card-title">{proj.title}</div> {/* Corrigido aqui */}
                            <div className="card-description">{proj.short}</div>
                        </div>
                    </div>
                ))}
            </div>

            {modalActive && (
                <div className="modal active" role="dialog" aria-modal="true">
                    <button
                        className="close-btn"
                        onClick={closeModal}
                        aria-label="Fechar modal"
                    >
                        ✕
                    </button>
                    <button
                        className="prev-btn"
                        onClick={prevImage}
                        aria-label="Imagem anterior"
                    >
                        &#10094;
                    </button>
                    <button
                        className="next-btn"
                        onClick={nextImage}
                        aria-label="Próxima imagem"
                    >
                        &#10095;
                    </button>

                    <div className="modal-content">
                        <img
                            id="modalImage"
                            src={project.images[currentImageIndex]}
                            alt={`Imagem do projeto ${currentProjectIndex + 1}`}
                            className="modal-image"
                        />
                        <div className="modal-description-container">
                            <div className="modal-title">{project.title}</div>
                            <div className="modal-description">{project.long}</div>
                            <div className="modal-description strong">{project.descriptionStrong}</div>
                            <div className="modal-functionalities">
                                <ul>
                                    {project.functionalities.map((func, i) => (
                                        <li key={i}>{func}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
