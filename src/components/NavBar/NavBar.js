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
            <Link to="/category/remeras" style={{ textDecoration: "none" }}>
              Remeras
            </Link>
          </li>
          <li>
            <Link to="/category/buzos" style={{ textDecoration: "none" }}>
              Buzos
            </Link>
          </li>
          <li>
            <Link to="/category/zapatillas" style={{ textDecoration: "none" }}>
              Zapatillas
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
