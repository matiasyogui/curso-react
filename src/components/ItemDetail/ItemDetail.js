import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <div>
      <img src={item.image} alt={item.nombre} />
      <h2>Producto: {item.nombre}</h2>
      <p>Precio: ${item.precio}</p>
      <p>Descripcion: {item.descripcion}</p>
      <ItemCount stock={item.stock} />

      <Button onClick={handleVolver}>VOLVER</Button>
    </div>
  );
};
