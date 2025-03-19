import { useState, useEffect } from "react";
import HomePage from "./Components/HomePage/home";
import Header from "./Components/Header/header";
import About from "./Components/About/about";
import "./App.css";
import profile from "./Assets/profille.png";
import exp from "./Assets/exp.svg";
import project from "./Assets/project.svg";
import heart from "./Assets/heart.svg";
import resume from "./Assets/WILLIAM_BERBET4.pdf";
import Project from "./Components/Project/project";
import Footer from "./Components/Footer/footer";
import {
	FaLinkedin,
	FaInstagramSquare,
	FaWhatsappSquare,
	FaGithubSquare,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Services from "./Components/MyServices/services";
import WorkWithMe from "./Components/WorkWithMe/wwm";

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
					<Project />
				</section>

				<section className="contato" id="contact">
					<div>
						<h1>
							Me mande <span>uma mensagem</span>
						</h1>
						<p>bora trabalhar juntos </p>
						<br></br>
					</div>

					<div className="social">
						<div>
							<p>
								Fale comigo pelas redes sociais, aproveita e já me segue lá{" "}
							</p>
							<div>
								<a
									href="https://www.linkedin.com/in/william-berbet/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<FaLinkedin
										color="#E1B208"
										size={40}
										className="social__icon"
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
										className="social__icon"
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
										className="social__icon"
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
										className="social__icon"
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
										className="social__icon"
									/>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section>
					<Footer />
				</section>
			</div>
		</>
	);
}

export default App;
