import { Link } from "react-router-dom";

import logo from "../../images/Froglogo.png"

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="navbar-items">
        <Link to="/login">
          <div>Login</div>
        </Link>
        <Link to="/signup">
          <div>Signup</div>
        </Link>
        <div>
          <i className="fa-solid fa-heart"></i>
        </div>
        <div>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
