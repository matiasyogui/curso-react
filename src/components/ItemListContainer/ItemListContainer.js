import { pedirDatos } from "../helpers/pedirDatos";
import { useState, useEffect, useContext } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router";
import { CartContext } from "../../context/CartContext";

const ItemListContainer = (/* props */) => {
  /* Se puede desestructurar props en el parametro 
  const { saludo, texto } = props;
   */

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const cart = useContext(CartContext);

  console.log(cart);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        if (params.categoryid) {
          setItems(resp.filter((item) => item.category === params.categoryid));
        } else {
          setItems(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Peticion finalizada.");
        setLoading(false);
      });
  }, [params.categoryid]);

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
