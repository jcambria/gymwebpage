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
		   <hr />
  	 		<div class="footer-col">
				
  	 			<h4>Hours <FaClock /> </h4>
  	 			<ul>
  	 				<li><a href="#"><strong>Monday-Friday</strong></a></li>
  	 				<li><a href="#">5:30am-9:00pm</a></li>
  	 				<li><a href="#"><strong>Saturday-Sunday</strong></a></li>
  	 				<li><a href="#">8:00am-5:00pm</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Location <FaMapMarkerAlt /> </h4>
  	 			<ul>
  	 				<li><a href="#">4250 North High Street <br /> Columbus,OH 43214</a></li>
  	 				<li><a href="#"></a></li>
  	 				{/* <li><a href="#">Order Status</a></li>
  	 				<li><a href="#">Payment Options</a></li> */}
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
  	 				<a href="#"> <FaPhone /> <i class="fab fa-twitter"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

</body>
  );
};

export default Footer;
