import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  collection,
  addDoc,
  getDocs,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./Checkout.scss";

export const Checkout = () => {
  const { cart, totalComprado, vaciarCarrito } = useContext(CartContext);

  const [orden, setOrden] = useState(null);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState();

  const generarOrden = () => {
    const orden = {
      comprador: {
        nombre: nombre,
        email: email,
        tel: tel,
      },

      items: cart,
      total: totalComprado(),
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);

    const orders = collection(db, "orders");
    const items = collection(db, "items");

    const q = query(
      items,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const sinStock = [];

    getDocs(q).then((resp) => {
      resp.forEach((doc) => {
        const itemAActualizar = cart.find((item) => item.id === doc.id);

        if (doc.data().stock >= itemAActualizar.cantidad) {
          batch.update(doc.ref, {
            stock: doc.data().stock - itemAActualizar.cantidad,
          });
        } else {
          sinStock.push(itemAActualizar);
        }
      });

      if (sinStock === 0) {
        batch.commit();
        addDoc(orders, orden).then((resp) => {
          setOrden({
            id: resp.id,
          });
          vaciarCarrito();
        });
      } else {
        alert("Item sin stock :(");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generarOrden();
  };

  return (
    <div className="checkout">
      <h2>Finalizar la compra</h2>
      <hr />

      {orden ? (
        <>
          <h3>Gracias por la compra realizada {orden.nombre}</h3>
          <p>Su numero de compra es {orden.id}</p>

          <Link to="/">Volver a inicio</Link>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="form">
            <TextField
              required
              id="outlined-required"
              label="Nombre completo"
              onChange={(e) => setNombre(e.target.value)} //handleNombre
              sx={{ m: 2 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)} //handleEmail
              sx={{ m: 2 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Telefono"
              onChange={(e) => setTel(e.target.value)} //handleTel
              sx={{ m: 2 }}
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ m: 2 }}
            >
              Finalizar
            </Button>
          </form>
        </>
      )}
    </div>
  );
};
