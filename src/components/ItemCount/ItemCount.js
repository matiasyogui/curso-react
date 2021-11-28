import { useState } from "react";
import Button from "@mui/material/Button";

export const ItemCount = (props) => {
  const [cantidad, setCantidad] = useState(0);

  const handleRestar = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    if (cantidad < props.stock) setCantidad(cantidad + 1);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleRestar}>
        -
      </Button>
      <span>{cantidad}</span>
      <Button variant="outlined" onClick={handleSumar}>
        +
      </Button>
    </div>
  );
};
