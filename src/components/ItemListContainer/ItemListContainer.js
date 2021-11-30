import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router";
import { Loader } from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

const ItemListContainer = (/* props */) => {
  /* Se puede desestructurar props en el parametro 
  const { saludo, texto } = props;
   */

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setLoading(true);

    //ref a la coleccion
    const productos = collection(db, "items");

    //armamos la query a la db
    const q = params.categoryid
      ? query(productos, where("category", "==", params.categoryid))
      : productos;

    getDocs(q)
      .then((resp) => {
        const prods = resp.docs.map((doc) => {
          return {
            id: doc.id, //agregamos el id de la db al item
            ...doc.data(),
          };
        });

        setItems(prods);
      })
      .finally((resp) => {
        setLoading(false);
      });
  }, [params.categoryid]);

  return (
    <div>
      <h2>Productos</h2>
      <hr />
      <div className="itemList">
        {loading ? <Loader /> : <ItemList items={items} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
