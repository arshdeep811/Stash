import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="footer-1">
        <h2 className="logo">StashCart</h2>
        <p className="disclaimer">
           This is a sample website created for demonstration purposes only. Any information, products, or 
           services presented on this site are fictional and not intended for actual use. Please do not proceed
           with any payments or transactions. We appreciate your understanding.
        </p>
        <ul className="icons">
           <li><FontAwesomeIcon icon={faFacebook} color="white" className="icon"/></li>
           <li><FontAwesomeIcon icon={faInstagram} color="white" className="icon"/></li>
           <li><FontAwesomeIcon icon={faTwitter} color="white" className="icon"/></li>
           <li><FontAwesomeIcon icon={faPinterest} color="white" className="icon"/></li>
          </ul>
      </footer>
      <footer className="footer-2">
        <p className="copyright">Copyright &copy; 2022, StashCart</p>
        <ul>
          <li><a href="/" id="a-home">Home</a></li>
          <li>About us</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;