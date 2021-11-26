import "./NavBar.scss";
import { Cart } from "../Cart/Cart";

const NavBar = () => {
  return (
    <header className="navbar">
      <h1>Hola Mundo!</h1>
      <nav>
        <ul>
          <li>Enlance1</li>
          <li>Enlance2</li>
          <li>Enlance3</li>
          <Cart />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
