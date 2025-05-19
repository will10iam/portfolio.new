import React from "react";
import exp from "../../Assets/exp.svg";
import project from "../../Assets/project.svg";
import heart from "../../Assets/heart.svg";

export default function WorkWithMe() {
	return (
		<>
			<section className="flex flex-col items-center text-center px-6 py-16 md:text-right md:px-20">
				<h1 className="md:text-6xl text-3xl mt-4 font-light text-white">
					PORQUE{" "}
					<span className="font-bold text-yellow-500">TRABALHAR COMIGO?</span>
				</h1>
				<p className="mt-4 text-white">
					Além de visar sempre o lucro do cliente colocando na tela aquilo que
					ele deseja, as aplicações que desenvolvo são responsivas com qualquer
					aparelho e leves para acessar de qualquer lugar!<br></br>
					<br></br>
					Com formações em Administração de Empresas e Desenvolvimento Web Full
					Stack te ajudo a colocar seu negócio em outro patamar. Vamos trabalhar
					juntos!
				</p>
			</section>

			<section className="flex justify-center md:justify-evenly items-center gap-7 pb-16">
				<article className="text-center">
					<header>
						<img src={exp} alt="" className="w-24" />
						<h3 className="pt-4 text-yellow-500 font-bold text-4xl">1+</h3>
					</header>
					<p className="font-normal text-white ">
						<span className="font-bold text-white">anos de</span>
						<br></br>experiência
					</p>
				</article>

				<article className="text-center">
					<header>
						<img src={project} alt="" className="w-24" />
						<h3 className="pt-4 text-yellow-500 font-bold text-4xl">5+</h3>
					</header>
					<p className="font-normal text-white ">
						<span className="font-bold text-white">projetos</span>
						<br></br>concluídos
					</p>
				</article>

				<article className="text-center">
					<header>
						<img src={heart} alt="" className="w-24" />
						<h3 className="pt-4 text-yellow-500 font-bold text-4xl">4+</h3>
					</header>
					<p className="font-normal text-white ">
						<span className="font-bold text-white">clientes</span>
						<br></br>felizes
					</p>
				</article>
			</section>
		</>
	);
}
