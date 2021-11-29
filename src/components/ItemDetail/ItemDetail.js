import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.nombre} />
      <h2>Producto: {item.nombre}</h2>
      <p>Precio: ${item.precio}</p>
      <p>Descripcion: {item.descripcion}</p>
      <ItemCount stock={item.stock} />
    </div>
  );
};
