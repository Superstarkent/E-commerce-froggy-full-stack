import { Link } from "react-router-dom";

import logo from "../../images/Froglogo.png"
import CartBadge from "../Cart/CartBadge";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/Home">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/login">
          <div>Login</div>
        </Link>
        <Link to="/signup">
          <div>Signup</div>
        </Link>
        <Link to="/user-profile">
          <div>User Profile</div>
        </Link>
        <Link to="/WishList">
          <div>
            <i className="fa-solid fa-heart"></i>
          </div>
        </Link>
        <Link to="/Checkout">
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
            <CartBadge />
          </div>
        </Link>
      </div>
    </div>
  );
};


export default Navbar;
