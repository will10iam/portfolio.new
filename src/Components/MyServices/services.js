import React from "react";

export default function Services() {
	return (
		<>
			<section className="flex flex-col items-center text-center px-6 py-12 md:flex md:items-start md:px-20 md:py-6 md:h-screen">
				<div>
					<h1 className=" text-white font-light text-3xl md:text-6xl">
						O QUE <span className="font-bold text-yellow-500  ">EU FAÇO?</span>
					</h1>
				</div>

				<div className="border-2 border-yellow-500 mt-4">
					<p className="mt-4 text-white md:text-left">
						Se você tem um negócio e quer de alguma forma ser encontrado na
						internet, é nisso que eu posso te ajudar. Seja em um site completo
						ou uma landing page, desde o design até o site pronto.
					</p>
					<div class="max-w-xs rounded overflow-hidden shadow-lg bg-gray-800 py-4 mt-8">
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 text-white text-center">
								Desenvolvimento para Internet
							</div>
							<p class="text-white text-center mt-4">
								Páginas de Cadastro, Páginas de Agradecimento, Sites com página
								única, Sites Institucionais completos, Ecommerces. <br></br>Tudo
								pronto para o seu negócio online!
							</p>
						</div>
						<div class="px-6 pt-2 pb-2 text-center">
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Solicitar Orçamento
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
