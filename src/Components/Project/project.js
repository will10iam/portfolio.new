import React, { useState } from "react";
import projects from "../../projectsdb.json";
import "./project.css";

export default function Project() {
	const [selectedProject, setSelectedProject] = useState(null); // Estado para o projeto selecionado
	const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/fechar modal

	function handleOpenModal(project) {
		setSelectedProject(project);
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		setIsModalOpen(false);
		setSelectedProject(null);
	}
	return (
		<section className="flex flex-col items-center text-center px-6 py-16 md:text-right md:px-20 md:py-16">
			<h1 className="text-white font-bold text-3xl">
				MEUS{" "}
				<span className="font-normal text-yellow-500">ÚLTIMOS PROJETOS</span>
			</h1>
			<div className="py-16 md:grid md:grid-cols-4 gap-2">
				{projects.map((project) => (
					<div
						key={project.id}
						className="flex justify-center items-center w-80 h-80 md:w-auto md:h-auto cursor-pointer transform transition hover:-translate-y-1"
						style={{ backgroundColor: project.bgcolor }}
						onClick={() => handleOpenModal(project)}
					>
						<img
							src={project.image}
							alt={project.title}
							className=" max-w-full max-h-full"
						/>
					</div>
				))}
			</div>

			{isModalOpen && selectedProject && (
				<div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
					<div
						className="bg-white rounded-lg p-6 md:p-8 max-w-80 md:max-w-auto mr-80 -ml-7 md:mr-0 md:ml-0"
						onClick={(e) => e.stopPropagation()}
					>
						<h2>{selectedProject.title}</h2>
						<p>{selectedProject.description}</p>
						<p>
							<strong>Tecnologias:</strong> {selectedProject.technologies}
						</p>
						<div className="modal-links">
							<a
								href={selectedProject.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								Repositório
							</a>
							<a
								href={selectedProject.deployed}
								target="_blank"
								rel="noopener noreferrer"
							>
								Site
							</a>
						</div>
						<button onClick={handleCloseModal} className="close-modal-btn">
							Fechar
						</button>
					</div>
				</div>
			)}
		</section>
	);
}
