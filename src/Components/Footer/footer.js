import './footer.css';
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className='footer-container'>
                <FaRegCopyright color='#444444' />
                <p>Desenvolvido por William Berbet, 2025. </p><br></br>
            </footer>
        </>

    )
}