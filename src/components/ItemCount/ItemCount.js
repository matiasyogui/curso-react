import Button from "@mui/material/Button";
import { useCounter } from "../hooks/useCounter";

export const ItemCount = ({ stock }) => {
  const { counter, incrementar, decrementar } = useCounter(stock);

  return (
    <div>
      <Button variant="outlined" onClick={decrementar}>
        -
      </Button>
      <span>{counter}</span>
      <Button variant="outlined" onClick={incrementar}>
        +
      </Button>
    </div>
  );
};
