import React from "react";

import {
	FaLinkedin,
	FaInstagramSquare,
	FaWhatsappSquare,
	FaGithubSquare,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";

export default function Contact() {
	return (
		<>
			<section className="flex flex-col items-center text-center text-white">
				<h1 className="text-white font-bold text-3xl">
					ME MANDE{" "}
					<span className="font-normal text-yellow-500">UMA MENSAGEM</span>
				</h1>
				<p>bora trabalhar juntos </p>
				<br></br>
			</section>

			<div>
				<div className="flex flex-col items-center text-center text-white">
					<p>
						Fale comigo pelas redes sociais ou e-mail. Aproveita e já me segue
						lá{" "}
					</p>
					<div className="inline-flex space-x-4 mt-4">
						<a
							href="https://www.linkedin.com/in/william-berbet/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin
								color="#E1B208"
								size={40}
								className="transition delay-150 duration-300 ease-in-out transform hover:scale-110"
							/>
						</a>
						<a
							href="https://github.com/will10iam"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaGithubSquare
								color="#FFF"
								size={40}
								className="transition delay-150 duration-300 ease-in-out transform hover:scale-110"
							/>
						</a>
						<a
							href="https://www.instagram.com/technobill_/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaInstagramSquare
								color="#E1B208"
								size={40}
								className="transition delay-150 duration-300 ease-in-out transform hover:scale-110"
							/>
						</a>
						<a
							href="https://wa.link/s7j3jg"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaWhatsappSquare
								color="#FFF"
								size={40}
								className="transition delay-150 duration-300 ease-in-out transform hover:scale-110"
							/>
						</a>
						<a
							href="https://www.tiktok.com/@technobill"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillTikTok
								color="#E1B208"
								size={45}
								className="transition delay-150 duration-300 ease-in-out transform hover:scale-110"
							/>
						</a>
						<a
							href="mailto:developwill1@gmail.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<MdMailOutline
								color="#000"
								size={35}
								className="bg-white rounded mt-1 transition delay-150 duration-300 ease-in-out transform hover:scale-110"
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
