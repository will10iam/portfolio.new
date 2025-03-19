import "./footer.css";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<footer className="flex items-center justify-center text-center text-gray-800 mt-16">
				<FaRegCopyright color="#1f2937" />
				<p>Desenvolvido por William Berbet, 2025. </p>
				<br></br>
			</footer>
		</>
	);
}
