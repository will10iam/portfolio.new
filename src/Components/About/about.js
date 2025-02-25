import React, { useEffect, useState } from "react";
import resume from "../../Assets/WILLIAM_BERBET4.pdf";
import perfil from "../../Assets/perfil.png";

export default function About() {
	const [downloading, setDownloading] = useState(false);

	useEffect(() => {
		setDownloading(false);
	}, [downloading]);

	function handleDownload() {
		setDownloading(true);
		const link = document.createElement("a");
		link.href = resume;
		link.download = "WILLIAM_BERBET4.pdf";
		link.onload = () => {
			link.remove();
			setDownloading(false);
		};
		document.body.appendChild(link);
		link.click();
	}

	return (
		<section className="flex flex-col items-center text-center bg-black text-white px-6 py-12 md:text-left md:px-20">
			{/* Imagem */}
			<div className="relative w-48 h-48 md:w-64 md:h-64 md: mr-12 overflow-hidden rounded-full items-center">
				<img
					src={perfil}
					alt="Foto Perfil William Berbet"
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="max-w-lg">
				<h2 className="text-3xl font-semibold mt-4">
					QUEM <span className="text-yellow-500">SOU EU?</span>
				</h2>
				<p className="mt-4">Amante de frango frito, música e muai thay!</p>
				<p className="mt-4">
					Eu crio sites que são responsivos, rápidos e fáceis de usar. Sites
					como Landing Pages, Páginas de Vendas e Agradecimento, Blogs, Lojas
					Virtuais & Portfólios estão entre os meus projetos.
				</p>
				<p className="mt-4">
					Desenvolvo aplicações para web com HTML, CSS, JS, REACT & TYPESCRIPT.
				</p>
				<p className="mt-4">
					Além disso estou me especializando em desenvolvimento em aplicativos
					mobile (para celular).
				</p>
				<div className="flex flex-col sm:flex-row gap-4 mt-6">
					<button
						className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
						onClick={handleDownload}
						disabled={downloading}
					>
						<strong>Download</strong> CV
					</button>
					<button className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition">
						<strong>Me chama</strong> no Whats
					</button>
				</div>
			</div>
		</section>
	);
}
