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
              <h4>
                Hours <FaClock />{" "}
              </h4>
              <ul>
                <li>
                  <a href="#">
                    <strong>Monday-Friday</strong>
                  </a>
                </li>
                <li>
                  <a href="#">5:30am-9:00pm</a>
                </li>
                <li>
                  <a href="#">
                    <strong>Saturday-Sunday</strong>
                  </a>
                </li>
                <li>
                  <a href="#">8:00am-5:00pm</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>
                Location <FaMapMarkerAlt />{" "}
              </h4>
              <ul>
                <li>
                  <a href="https://www.google.com/maps/place/4250+N+High+St,+Columbus,+OH+43214/@40.0485475,-83.0223057,17z/data=!4m6!3m5!1s0x88388c5ca68d0fc1:0x8abbd0ab6c39359d!8m2!3d40.0485434!4d-83.0197308!16s%2Fg%2F11bw3_lw89" target="_blank">
                    4250 North High Street <br /> Columbus, OH 43214
                  </a>
                </li>

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
              <h4>follow us</h4>
              <div class="social-links">
                <a href="https://www.facebook.com/profile.php?id=100057378021597" target="_blank">
                  {" "}
                  <FaFacebook /> <i ></i>
                </a>
                <a href="https://www.linkedin.com/company/columbus-sports-connection/" target="_blank">
                  {" "}
                  <FaLinkedin /> <i></i>
                </a>
                <a href="#">
                  {" "}
                  <FaTwitter /> <i></i>
                </a>
                <a href="tel:6142672582">
                  {" "}
                  <FaPhone /> <i></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Footer;
