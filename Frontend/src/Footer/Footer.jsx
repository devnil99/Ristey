import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Logo */}
        {/* <div className="footer-section logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIhnK0W7kbZ_6IBKWbWuzTvQGEgZQFU6K7Q&s"
            alt="Company "
            className="footer-logo"
          />
        </div> */}

        {/* About Section */}
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We connect hearts and create beautiful matrimonial journeys.
            Join us to find your perfect match.
          </p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Our Partners */}
        <div className="footer-section partners">
          <h2>Our Partners</h2>
          <div>
            <Link to="#">Our Staff</Link>
          </div>
         
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Matrimonials. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
