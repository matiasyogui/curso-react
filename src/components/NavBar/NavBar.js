import "./NavBar.scss";
import { Cart } from "../Cart/Cart";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <h1>
        <Link to="/">e-Commerce</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/category/remeras">Remeras</Link>
          </li>
          <li>
            <Link to="/category/buzos">Buzos</Link>
          </li>
          <li>
            <Link to="/category/zapatillas">Zapatillas</Link>
          </li>
          <Cart />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
