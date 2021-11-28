import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const FyH = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  });

  return (
    <div>
      <p>Fecha y Hora: {date.toLocaleString()}</p>
    </div>
  );
};
