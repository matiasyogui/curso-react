import Button from "@mui/material/Button";

export const ItemCount = ({ incrementar, decrementar, add, counter }) => {
  return (
    <div>
      <Button variant="outlined" onClick={decrementar}>
        -
      </Button>
      <span>{counter}</span>
      <Button variant="outlined" onClick={incrementar}>
        +
      </Button>
      <div>
        <Button variant="contained" onClick={add}>
          Agregar
        </Button>
      </div>
    </div>
  );
};
