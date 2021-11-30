import Button from "@mui/material/Button";

export const ItemCount = ({ incrementar, decrementar, add, counter, max }) => {
  return (
    <div>
      <Button
        variant={"outlined"}
        color={counter === 0 && "error"}
        onClick={decrementar}
      >
        -
      </Button>
      <span>{counter}</span>
      <Button
        variant="outlined"
        color={counter === max && "error"}
        onClick={incrementar}
      >
        +
      </Button>
      <div>
        {counter === 0 ? (
          <Button variant="contained" onClick={add} disabled>
            Agregar
          </Button>
        ) : (
          <Button variant="contained" onClick={add}>
            Agregar
          </Button>
        )}
      </div>
    </div>
  );
};
