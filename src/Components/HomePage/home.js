import React from "react";
import Typewriter from "typewriter-effect";

export default function HomePage() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-white sm:text-8xl text-4xl font-extralight pt-20">
				WILLIAM
				<span className="text-yellow-500 text-center font-bold">BERBET</span>
			</h1>
			<div className="text-white text-2xl font-light pb-14">
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
