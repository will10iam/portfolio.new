import "./footer.css";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<footer className="flex items-center justify-center text-center text-gray-800 mt-12">
				<FaRegCopyright color="#1f2937" className="mb-12" />
				<p className="mb-12">Desenvolvido por William Berbet, 2025. </p>
				<br></br>
			</footer>
		</>
	);
}
