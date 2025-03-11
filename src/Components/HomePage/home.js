import React from "react";
import Typewriter from "typewriter-effect";

export default function HomePage() {
	return (
		<div className="h-screen md:h-screen">
			<div className="flex flex-col md:flex-row justify-center items-center">
				<h1 className="text-white md:text-8xl text-6xl font-extralight pt-20">
					WILLIAM
				</h1>
				<span className="text-yellow-500 text-center text-7xl md:text-8xl font-bold md:pt-20">
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
		</div>
	);
}
