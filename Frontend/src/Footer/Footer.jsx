// // import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import "../Footer/Footer.css";

// // const Footer = () => {
// //   return (
// //     <footer className="footer">
// //       <div className="footer-container">

// //         {/* About Section */}
// //         <div className="footer-section about">
// //           <h2>About Us</h2>
// //           <p>
// //             We connect hearts and create beautiful matrimonial journeys.
// //             Join us to find your perfect match.
// //           </p>
// //         </div>

// //         {/* Social Media */}
// //         <div className="footer-section social">
// //           <h2 className="Follow_us">Follow Us</h2>
// //           <div className="social-icons">
// //             <a href="#"><FaFacebook /></a>
// //             <a href="#"><FaTwitter /></a>
// //             <a href="#"><FaInstagram /></a>
// //             <a href="#"><FaLinkedin /></a>
// //           </div>
// //         </div>

// //         {/* Our Partners */}
// //         <div className="footer-section partners">
// //           <h2>Our Partners</h2>
// //           <div>
// //             <Link to="/Staff_Login">Our Staff</Link>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="footer-bottom">
// //         <p>&copy; 2025 Matrimonials. All Rights Reserved.</p>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "../Footer/Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* About Section */}
//         <div className="footer-section about">
//           <h2>About Us</h2>
//           <p>
//             We connect hearts and create beautiful matrimonial journeys.
//             Join us to find your perfect match.
//           </p>
//         </div>

//         {/* Social Media */}
//         <div className="footer-section social">
//           <h2>Follow Us</h2>
//           <div className="social-icons">
//             <a href="#" aria-label="Facebook"><FaFacebook /></a>
//             <a href="#" aria-label="Twitter"><FaTwitter /></a>
//             <a href="#" aria-label="Instagram"><FaInstagram /></a>
//             <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
//           </div>
//         </div>

//         {/* Our Partners */}
//         <div className="footer-section partners">
//           <h2>Our Partners</h2>
//           <div>
//             <Link to="/Staff_Login">Our Staff</Link>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; 2025 Matrimonials. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { SubscriberPost } from "../Api/CoreApi";
const Footer = () => {
  //  Feedback subscribe logics
  const handlesubscribe = async (values) => {
    const res = await SubscriberPost(values);

    console.log(res);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Helping hearts meet since 2020. We connect individuals seeking
            meaningful relationships and lifelong companionship.
          </p>
        </div>
        {/*   footer section  */}
        {/* Partners */}
        <div className="footer-section">
          <h3>Our Partners</h3>
          <div className="partners-grid">
            {/* <img src="/partners/shaadisecure.png" alt="ShaadiSecure" />
            <img src="/partners/lovematchai.png" alt="LoveMatch AI" />
            <img src="/partners/bharatconnect.png" alt="BharatConnect" />
            <img src="/partners/verifiedprofiles.png" alt="VerifiedProfiles" /> */}
          </div>
          <Link to="/Staff_Login" className="staff-link">
            Meet Our Staff
          </Link>
        </div>

        {/* Stay Connected */}
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/company/yourcompany"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <Form onFinish={handlesubscribe}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input placeholder="Your email" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📧 support@yourmatrimony.com</p>
          <p>☎ +91-0000000000</p>
          <p>📍 123 Raipur CG, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 YourMatrimony. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
