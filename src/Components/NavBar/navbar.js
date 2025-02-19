import React from "react";
import "./navbar.css";
export default function Navbar() {
	return (
		<nav>
			<ul className="text-white">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">Sobre Mim</a>
				</li>
				<li>Meus Projetos</li>
				<li>Contato</li>
			</ul>
		</nav>
	);
}
