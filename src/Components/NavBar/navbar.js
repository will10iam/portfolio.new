import React, { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="relative">
			{/* Botão do Menu Hambúrguer (aparece apenas em telas menores) */}
			<button
				className="md:hidden text-white text-2xl"
				onClick={() => setIsOpen(!isOpen)}
			>
				☰
			</button>

			{/* Navbar - Mobile */}
			<ul
				className={`absolute top-12 right-0 bg-black w-40 flex flex-col items-start p-4 space-y-2 rounded-lg md:hidden transition-all ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
			>
				<li>
					<a
						href="#home"
						className="text-white hover:text-gray-300 no-underline hover:no-underline"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#about"
						className="text-white hover:text-gray-300 no-underline hover:no-underline"
					>
						Sobre Mim
					</a>
				</li>
				<li>
					<a
						href="#projects"
						className="text-white hover:text-gray-300 no-underline hover:no-underline"
					>
						Meus Projetos
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="text-white hover:text-gray-300 no-underline hover:no-underline"
					>
						Contato
					</a>
				</li>
			</ul>

			{/* Navbar - Desktop */}
			<ul className="hidden md:flex space-x-6 text-white">
				<li>
					<a
						href="#home"
						className="no-underline hover:text-gray-300 hover:no-underline"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#about"
						className="no-underline hover:text-gray-300 hover:no-underline"
					>
						Sobre Mim
					</a>
				</li>
				<li>
					<a
						href="#projects"
						className="no-underline hover:text-gray-300 hover:no-underline"
					>
						Meus Projetos
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="no-underline hover:text-gray-300 hover:no-underline"
					>
						Contato
					</a>
				</li>
			</ul>
		</nav>
	);
}
