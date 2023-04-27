import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa"; // Import icons from react-icons/fa
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
<body>
  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Hours</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">About</a></li>
  	 				<li><a href="#">Pricing</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="#">Shipping</a></li>
  	 				<li><a href="#">Returns</a></li>
  	 				<li><a href="#">Order Status</a></li>
  	 				<li><a href="#">Payment Options</a></li>
  	 			</ul>
  	 		</div>
  	 		{/* <div class="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate adipisci quia ab omnis id ipsum quae inventore </a></li>
  	 			</ul>
  	 		</div> */}
  	 		<div class="footer-col">
  	 			{/* <h4>follow us</h4> */}
  	 			<div class="social-links">
  	 				<a href="#"> <FaFacebook /> <i class="fab fa-google"></i></a>
  	 				<a href="#"> <FaLinkedin /> <i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"> <FaTwitter /> <i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

</body>
  );
};

export default Footer;
