import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.scss";

export const Cart = () => {
  const { cantItems } = useContext(CartContext);

  return (
    <div className="cart">
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <FaShoppingCart />
        <span>{cantItems()}</span>
      </Link>
    </div>
  );
};
