import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

function Footer() {
    return(
        <footer>
            <FaTwitterSquare className="footer--icon" />
            <FaFacebookSquare className="footer--icon" />
            <FaInstagramSquare className="footer--icon" />
            <FaGithubSquare className="footer--icon" />
        </footer>
    )
}

export default Footer;