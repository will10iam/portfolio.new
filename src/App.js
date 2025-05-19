import { useState, useEffect } from "react";
import HomePage from "./Components/HomePage/home";
import Header from "./Components/Header/header";
import About from "./Components/About/about";
import "./App.css";
import resume from "./Assets/WILLIAM_BERBET4.pdf";
import Projects from "./Components/MyProjects/project";
import Footer from "./Components/Footer/footer";
import Services from "./Components/MyServices/services";
import WorkWithMe from "./Components/WorkWithMe/wwm";
import Contact from "./Components/Contact/contact";

function App() {
	const [downloading, setDownloading] = useState(false);

	useEffect(() => {
		setDownloading(false);
	}, [downloading]);

	function handleDownload() {
		setDownloading(true);
		const link = document.createElement("a");
		link.href = resume;
		link.download = "WILLIAM_BERBET4.pdf";
		link.onload = () => {
			link.remove();
			setDownloading(false);
		};
		document.body.appendChild(link);
		link.click();
	}

	return (
		<>
			<header>
				<Header />
			</header>

			<div>
				<section id="home">
					<HomePage />
				</section>

				<section id="about">
					<About />
				</section>

				<section id="services">
					<Services />
				</section>

				<section id="wwm">
					<WorkWithMe />
				</section>

				<section id="projects">
					<Projects />
				</section>

				<section id="contact">
					<Contact />
				</section>

				<section>
					<Footer />
				</section>
			</div>
		</>
	);
}

export default App;
