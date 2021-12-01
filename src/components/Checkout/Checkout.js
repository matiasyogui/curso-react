import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { CartContext } from "../../context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

export const Checkout = () => {
  const { cart, totalComprado } = useContext(CartContext);

  const generarOrden = () => {
    const orden = {
      comprador: {
        nombre: "Matias Yogui",
        email: "myogui@123.com",
        tel: 123456789,
      },

      items: cart,
      total: totalComprado(),
      date: Timestamp.fromDate(new Date()),
    };

    const orders = collection(db, "orders");

    addDoc(orders, orden).then((resp) => {
      console.log(resp);
      console.log(resp.id);
    });
  };

  return (
    <div>
      <h2>Finalizar la compra</h2>
      <hr />

      <Button variant="contained" color="success" onClick={generarOrden}>
        Finalizar
      </Button>
    </div>
  );
};
