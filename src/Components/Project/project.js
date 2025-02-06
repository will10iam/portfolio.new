import React, { useState } from "react";
import projects from '../../projectsdb.json';
import './project.css';



export default function Project() {
    const [selectedProject, setSelectedProject] = useState(null); // Estado para o projeto selecionado
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/fechar modal

    function handleOpenModal(project) {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    function handleCloseModal() {
        setIsModalOpen(false)
        setSelectedProject(null)
    }
    return (
        <section className="projects-section">
            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        style={{ backgroundColor: project.bgcolor }}
                        onClick={() => handleOpenModal(project)}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                    </div>
                ))}
            </div>

            {isModalOpen && selectedProject && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <p><strong>Tecnologias:</strong> {selectedProject.technologies}</p>
                        <div className="modal-links">
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">Repositório</a>
                            <a href={selectedProject.deployed} target="_blank" rel="noopener noreferrer">Site</a>
                        </div>
                        <button onClick={handleCloseModal} className="close-modal-btn">Fechar</button>
                    </div>
                </div>
            )}
        </section>
    )
}