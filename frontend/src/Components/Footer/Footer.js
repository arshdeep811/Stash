import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="footer-1">
          <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>For Query</li>
            <li>Career</li>
          </ul>
          <ul className="icons">
            <li><FontAwesomeIcon icon={faFacebook} color="white" className="icon"/></li>
            <li><FontAwesomeIcon icon={faInstagram} color="white" className="icon"/></li>
            <li><FontAwesomeIcon icon={faTwitter} color="white" className="icon"/></li>
            <li><FontAwesomeIcon icon={faPinterest} color="white" className="icon"/></li>
          </ul>
      </footer>
      <footer className="footer-2">
        <p>Copyright &copy; 2022, StashCart.com</p>
      </footer>
    </div>
  );
};

export default Footer;
