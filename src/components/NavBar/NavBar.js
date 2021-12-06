import "./NavBar.scss";

import { Cart } from "../Cart/Cart";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          e-Commerce
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/category/iphone" style={{ textDecoration: "none" }}>
              iPhone
            </Link>
          </li>
          <li>
            <Link to="/category/samsung" style={{ textDecoration: "none" }}>
              Samsung
            </Link>
          </li>
          <li>
            <Link to="/category/motorola" style={{ textDecoration: "none" }}>
              Motorola
            </Link>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
