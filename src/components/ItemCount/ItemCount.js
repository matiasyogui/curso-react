import { Button, Box } from "@mui/material";

export const ItemCount = ({ incrementar, decrementar, add, counter, max }) => {
  return (
    <>
      <div className="boton">
        <Box component="span" sx={{ p: 2 }}>
          <Button
            variant={"outlined"}
            color={counter === 0 && "error"}
            onClick={decrementar}
          >
            -
          </Button>
        </Box>

        <span>{counter}</span>

        <Box component="span" sx={{ p: 2 }}>
          <Button
            variant="outlined"
            color={counter === max && "error"}
            onClick={incrementar}
          >
            +
          </Button>
        </Box>
      </div>

      {counter === 0 ? (
        <Box sx={{ m: 2 }}>
          <Button variant="contained" onClick={add} disabled className="boton">
            Agregar
          </Button>
        </Box>
      ) : (
        <Box sx={{ m: 2 }}>
          <Button variant="contained" onClick={add} className="boton">
            Agregar
          </Button>
        </Box>
      )}
    </>
  );
};
