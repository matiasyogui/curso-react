import { useState } from "react";

export const useCounter = (stock) => {
  const [counter, setCounter] = useState(0);

  const incrementar = () => {
    counter < stock && setCounter(counter + 1);
  };

  const decrementar = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return {
    counter,
    incrementar,
    decrementar,
  };
};
