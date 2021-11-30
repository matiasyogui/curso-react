import React, { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useCounter } from "../hooks/useCounter";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
  const { agregarACart, isInCart } = useContext(CartContext);

  const navigate = useNavigate();

  const { counter, incrementar, decrementar } = useCounter(item.stock);

  const handleVolver = () => {
    navigate(-1);
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleAgregar = () => {
    counter > 0 &&
      agregarACart({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: counter,
      });
  };

  return (
    <div>
      <img src={item.image} alt={item.nombre} />
      <h2>Producto: {item.nombre}</h2>
      <p>Precio: ${item.precio}</p>
      <p>Descripcion: {item.descripcion}</p>

      {!isInCart(item.id) ? (
        <ItemCount
          incrementar={incrementar}
          decrementar={decrementar}
          add={handleAgregar}
          counter={counter}
          max={item.stock}
        />
      ) : (
        <Button onClick={handleCart}>Terminar mi compra.</Button>
      )}

      <Button onClick={handleVolver}>VOLVER</Button>
    </div>
  );
};
