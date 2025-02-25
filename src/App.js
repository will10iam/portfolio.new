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

				<section>
					<About />
				</section>

				{/* <section className="about" id="about">
					<div>
						<h1>
							Sobre <span>Mim</span>
						</h1>
						<p>
							Amante de frango frito, música e muai thay!<br></br>
							Eu crio sites que são responsivos, rápidos e fáceis de usar!
							<br></br>
							<br></br>
							Sites como Landing Pages, Páginas de Vendas e Agradecimento,
							Blogs, Lojas Virtuais & Portfólios estão entre os meus projeto.
							<br></br>
							<br></br>
							Desenvolvo aplicações para web com HTML, CSS, JS, REACT &
							TYPESCRIPT.<br></br>
							<br></br>
							Além disso estou me especializando em desenvolvimento em
							aplicativos mobile (para celular).
						</p>
					</div>
					<div className="image-profile">
						<img src={profile} alt="" />
					</div>
				</section>

				<section className="about-buttons">
					<button
						className="btn-1"
						onClick={handleDownload}
						disabled={downloading}
					>
						Download <span>CV</span>
					</button>
					<button className="btn-2">
						Enviar <span>uma mensagem</span>
					</button>
				</section> */}

				<section className="work" id="services">
					<h1>
						O que <span>eu faço?</span>
					</h1>
					<p>
						Se você tem um negócio e quer de alguma forma ser encontrado na
						internet, é nisso que eu posso te ajudar. Seja em um site completo
						ou uma landing page, desde o design até o site pronto.
					</p>
					<hr color="#E1B208" className="hr-1"></hr>
					<hr color="#E1B208" className="hr-2"></hr>
				</section>

				<section class="cards-container">
					<article class="card">
						<header>
							<h3>
								Web <br></br>Designer
							</h3>
						</header>
						<hr class="divider" />
						<p>
							Pronto para o seu negócio! <br></br>Landing Pages, Ecommerces e
							etc..
						</p>
					</article>

					<article class="card large">
						<header>
							<h3>
								Web <br></br>Developer
							</h3>
						</header>
						<hr class="divider" />
						<p>Sites, plataformas e aplicações para internet.</p>
					</article>

					<article class="card">
						<header>
							<h3>Mobile Developer</h3>
						</header>
						<hr class="divider" />
						<p>
							Você pode ter seu negócio na palma da sua mão com um app mobile!
						</p>
					</article>
				</section>

				<section className="porque">
					<h1>
						Porque <span>trabalhar comigo?</span>
					</h1>
					<p>
						Além de visar sempre o lucro do cliente colocando na tela aquilo que
						ele deseja, as aplicações que desenvolvo são responsivas com
						qualquer aparelho e leves para acessar de qualquer lugar!<br></br>
						<br></br>
						Com formações em Administração de Empresas e Desenvolvimento Web
						Full Stack te ajudo a colocar seu negócio em outro patamar. Vamos
						trabalhar juntos!
					</p>
				</section>
				<section className="icons-container">
					<article class="icons-work">
						<header>
							<img src={exp} alt="" />
							<h3>1+</h3>
						</header>
						<p>
							<span>anos de</span>
							<br></br>experiência
						</p>
					</article>

					<article class="icons-work">
						<header>
							<img src={project} alt="" />
							<h3>8+</h3>
						</header>
						<p>
							<span>projetos</span>
							<br></br>concluídos
						</p>
					</article>

					<article class="icons-work">
						<header>
							<img src={heart} alt="" />
							<h3>6+</h3>
						</header>
						<p>
							<span>clientes</span>
							<br></br>feliz
						</p>
					</article>
				</section>

				<section className="work" id="projects">
					<h1>
						Meus <span>últimos projetos</span>
					</h1>
					<hr color="#E1B208" className="hr-1"></hr>
					<hr color="#E1B208" className="hr-2"></hr>
				</section>

				<section>
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
