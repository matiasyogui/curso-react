import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartView.scss";

export const CartView = () => {
  const { cart, precioTotalItem, totalComprado, vaciarCarrito, eliminarItem } =
    useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cartView">
      <h2>CartView</h2>
      <hr />

      {cart.map((item) => (
        <div key={item.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.nombre}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Precio: ${item.precio}. Cantidad: {item.cantidad}
              </Typography>
              <Typography variant="body2">
                Total: ${precioTotalItem(item.id)}
              </Typography>
            </CardContent>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => {
                eliminarItem(item.id);
              }}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Card>
        </div>
      ))}

      <hr />

      {cart.length > 0 ? (
        <>
          <h4>Total comprado: ${totalComprado()}</h4>
          <Box component="span" sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </Button>
          </Box>
          <Box component="span" sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleCheckout}
            >
              Terminar mi compra
            </Button>
          </Box>
        </>
      ) : (
        <>
          <h2>Tu carrito se encuentra vacio.</h2>
          <h4>¿Que estas esperando para aprovechar nuestros precios?</h4>
        </>
      )}
    </div>
  );
};
