import React, { useState, useEffect } from "react";
import { pedirItem } from "../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirItem(1)
      .then((resp) => {
        setItem(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Peticion finalizada.");
      });
  }, []);

  return <div>{item && <ItemDetail item={item} />}</div>;
};
