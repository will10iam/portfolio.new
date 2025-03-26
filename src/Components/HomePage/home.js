import React from "react";
import Typewriter from "typewriter-effect";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function HomePage() {
	return (
		<div className="h-screen md:h-auto">
			<div className="flex flex-col md:flex-row justify-center items-center md:pt-8 pt-20">
				<h1 className="text-white md:text-8xl text-6xl font-extralight">
					WILLIAM
				</h1>
				<span className="text-yellow-500 text-center text-7xl md:text-8xl font-bold">
					BERBET
				</span>
			</div>
			<div className="text-white text-2xl md:text-3xl font-light text-center">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.changeDelay(80)
							.typeString("Desenvolvedor Front-End!")
							.pauseFor(1500)
							.deleteAll()
							.typeString("Web ")
							.pauseFor(500)
							.typeString("&  ")
							.pauseFor(500)
							.typeString("Mobile.")

							.start();
					}}
				/>
			</div>

			<div className="flex justify-center items-center pt-52 md:pt-32 md:pb-6">
				<a href="#about">
					<FaRegArrowAltCircleDown
						size={45}
						color="#fff"
						className="animate-bounce"
					/>
				</a>
			</div>
		</div>
	);
}
