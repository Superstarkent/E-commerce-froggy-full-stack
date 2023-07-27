import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";



const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul>
          <li>
            <h6>
              <span>Shop</span>
            </h6>
          </li>
          <li>
            <span>Gift Guides</span>
          </li>
          <li>
            <span>fanart</span>
          </li>
          <li>
            <span>New Works</span>
          </li>
          <li>
            <span>Blog</span>
          </li>
          <li>
            <span>Student Discount</span>
          </li>
          <li>
            <span>Bulk orders</span>
          </li>
        </ul>
        <ul>
          <li>
            <h6>
              <span>About</span>
            </h6>
          </li>
          <li>
            <Link to="/about">
              <span>About us</span>
            </Link>
          </li>
          <li>
            <span>Social Responsibility</span>
          </li>
          <li>
            <span>Partner Program</span>
          </li>
          <li>
            <span>Affiliates</span>
          </li>
          <li>
            <span>Sell your art</span>
          </li>
          <li>
            <span>Jobs</span>
          </li>
          <li>
            <span>Artist Blog</span>
          </li>
        </ul>
        <ul>
          <li>
            <h6>
              <span>Help</span>
            </h6>
          </li>
          <li>
            <span>Delivery</span>
          </li>
          <li>
            <span>Returns</span>
          </li>
          <li>
            <span>Help Center</span>
          </li>
          <li>
            <span>Guidelines</span>
          </li>
          <li>
            <span>Copyright</span>
          </li>
          <li>
            <span>Investor Center</span>
          </li>
          <li>
            <span>Contact Us</span>
          </li>
          <li>
            <span>Cookie Settings</span>
          </li>
        </ul>
        <ul>
          <li>
            <h6>
              <span>Social</span>
            </h6>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faTumblr} /> Tumblr
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faPinterest} /> Pinterest
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
