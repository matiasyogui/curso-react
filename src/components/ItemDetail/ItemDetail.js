import React, { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { useCounter } from "../hooks/useCounter";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.scss";

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
    <div className="itemDetail">
      <img src={item.image} alt={item.nombre} />
      <div className="texto">
        <h2>Producto: {item.nombre}</h2>
        <p>
          <strong>Precio:</strong> ${item.precio}
        </p>
        <p>
          <strong>Descripcion:</strong> {item.descripcion}
        </p>

        <div className="accionItemDetail">
          {!isInCart(item.id) ? (
            <ItemCount
              incrementar={incrementar}
              decrementar={decrementar}
              add={handleAgregar}
              counter={counter}
              max={item.stock}
            />
          ) : (
            <Box sx={{ m: 1 }}>
              <Button
                onClick={handleCart}
                variant="outlined"
                style={{ margin: 0.5 }}
              >
                Terminar mi compra
              </Button>
            </Box>
          )}

          <Box sx={{ m: 1 }}>
            <Button onClick={handleVolver} variant="outlined" className="boton">
              Volver
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};
