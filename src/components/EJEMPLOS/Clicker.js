import { useState, useEffect } from "react";

export const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    console.log("Clicker montado");

    return () => {
      console.log("Clicker desmontado.");
    };
  }, []); //Se ejecuta en el montado y cuando se haga una dependencia

  return (
    <div onClick={handleClicks}>
      <p>Clickeame!</p>
      <p>Numero de clicks {clicks}</p>
    </div>
  );
};
