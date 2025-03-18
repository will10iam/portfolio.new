import React from "react";

export default function Services() {
	return (
		<>
			<section className="flex flex-col items-center text-center px-6 py-12 md:text-right md:px-20 md:py-16">
				<h1 className="text-white font-bold text-3xl">
					O QUE <span className="font-normal text-yellow-500">EU FAÇO?</span>
				</h1>
				<p className="mt-4 text-white">
					Se você tem um negócio e quer de alguma forma ser encontrado na
					internet, é nisso que eu posso te ajudar. Seja em um site completo ou
					uma landing page, desde o design até o site pronto.
				</p>
				<hr color="#E1B208"></hr>
				<hr color="#E1B208"></hr>
			</section>
			<div className="flex flex-col justify-center items-center md:flex-row gap-4 mt-1 border-red-500">
				<div class="max-w-xs md:max-w-md rounded overflow-hidden shadow-lg bg-gray-800">
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

				{/* <div class="max-w-xs md:max-w-md rounded overflow-hidden shadow-lg bg-gray-800">
					<img class="w-full" src="" alt="Sunset in the mountains" /> 
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-white text-center">
							Desenvolvimento para Celulares
						</div>
						<p class="text-white text-center mt-4">
							Você pode ter seu negócio na palma da sua mão com um app mobile!
						</p>
					</div>
					<div class="px-6 pt-2 pb-2 text-center">
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
							Solicitar Orçamento
						</span>
					</div>
				</div> */}
			</div>
		</>
	);
}
