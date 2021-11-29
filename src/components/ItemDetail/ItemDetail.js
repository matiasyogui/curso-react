import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useCounter } from "../hooks/useCounter";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const { counter, incrementar, decrementar } = useCounter(item.stock);

  const handleVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    console.log("item agregado", item.id, item.nombre, "cantidad: " + counter);
  };

  return (
    <div>
      <img src={item.image} alt={item.nombre} />
      <h2>Producto: {item.nombre}</h2>
      <p>Precio: ${item.precio}</p>
      <p>Descripcion: {item.descripcion}</p>
      <ItemCount
        incrementar={incrementar}
        decrementar={decrementar}
        add={handleAgregar}
        counter={counter}
      />

      <Button onClick={handleVolver}>VOLVER</Button>
    </div>
  );
};

a;
