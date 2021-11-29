import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { pedirItem } from "../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  console.log(params.itemid);

  useEffect(() => {
    setLoading(true);

    pedirItem(Number(params.itemid))
      .then((resp) => {
        setItem(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Peticion finalizada.");
        setLoading(false);
      });
  }, [params.itemid]);

  return (
    <div>
      <h2>Item Details</h2>
      {loading ? <h2>LOADING...</h2> : <ItemDetail item={item} />}
    </div>
  );
};
