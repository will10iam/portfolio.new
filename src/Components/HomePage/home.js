import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

export default function HomePage() {
	return (
		<div className="home">
			<h1>
				WILLIAM <span>BERBET</span>
			</h1>
			<Typewriter
				className="description"
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
	);
}
