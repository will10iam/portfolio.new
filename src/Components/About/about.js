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
		<section className="flex flex-col items-center text-center bg-black text-white px-6 py-12 md:flex md:flex-row-reverse md:justify-evenly md:items-center md:h-screen">
			{/* Imagem */}
			<div>
				<img
					src={perfil}
					alt="Foto Perfil William Berbet"
					className="w-72 h-72 rounded-full"
				/>
			</div>

			<div className="max-w-3xl md:text-left">
				<h2 className="md:text-6xl text-3xl mt-4 font-light">
					QUEM <span className="text-yellow-500 font-bold">SOU EU?</span>
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
				<div className="flex flex-col justify-start items-center md:flex-row gap-4 mt-6">
					<button
						className="bg-gray-800 text-white px-12 py-2 text-center rounded-lg shadow-md hover:bg-gray-700 transition"
						onClick={handleDownload}
						disabled={downloading}
					>
						<strong>Download</strong> CV
					</button>
					<a
						href="https://wa.me/5519996602839"
						className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-black hover:no-underline transition"
						target="_blank rel=noopener noreferrer"
					>
						<strong>Me chama</strong> no Whats
					</a>
				</div>
			</div>
		</section>
	);
}
