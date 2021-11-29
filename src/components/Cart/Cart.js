import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cart.scss";

export const Cart = () => {
  return (
    <div className="cart">
      <Link to="/cartview">
        <FaShoppingCart />
      </Link>
    </div>
  );
};
