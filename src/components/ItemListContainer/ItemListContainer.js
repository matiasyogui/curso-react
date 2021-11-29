import { pedirDatos } from "../helpers/pedirDatos";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({ saludo, texto } /* props */) => {
  /* Se puede desestructurar props en el parametro 
  const { saludo, texto } = props;
   */

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        setItems(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Peticion finalizada.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <hr />
      <div className="itemList">
        {loading ? <h2>Cargando productos...</h2> : <ItemList items={items} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
