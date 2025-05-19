import React from "react";

export default function Services() {
	return (
		<>
			<section className="flex flex-col items-center text-center px-6 py-12 md:flex md:items-start md:px-20 md:py-20">
				<div>
					<h1 className=" text-white font-light text-3xl md:text-6xl">
						O QUE <span className="font-bold text-yellow-500  ">EU FAÇO?</span>
					</h1>
				</div>

				<div className=" mt-4 md:flex md:flex-row md:justify-between md:w-full md:gap-4">
					<p className="mt-4 text-white md:text-left md:w-3/5 pb-4">
						Se você tem um negócio e quer de alguma forma ser encontrado na
						internet, é nisso que eu posso te ajudar. <br></br>
						Eu garanto a sua presença na internet! <br></br>
						Seja com um site completo ou uma landing page (página única), uma
						aplicação para facilitar seu dia a dia. <br></br>
						Eu desenvolvo soluções para o seu negócio, seja ele pequeno ou
						grande.
					</p>
					<div className="bg-gray-700 p-4 rounded-lg shadow-md md:-mt-20">
						<p className="text-white text-2xl font-bold md:text-xl">
							Desenvolvimento para Internet
						</p>
						<ul className="list-disc text-white mt-4 mb-4 text-left ml-4">
							<li>Páginas de Cadastro</li>
							<li>Páginas de Agradecimento</li>
							<li>Sites de Página Única</li>
							<li>Sites Institucionais Completos</li>
							<li>Ecommerces.</li>
						</ul>
						<p className="text-white font-medium mb-4">
							Tudo pronto para o seu negócio
						</p>
						<a
							href="https://wa.me/5519996602839"
							className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-black hover:no-underline transition"
							target="_blank rel=noopener noreferrer"
						>
							<strong>Solicitar</strong> Orçamento
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
