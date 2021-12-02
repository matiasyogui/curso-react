import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { collection, getDoc, doc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import "./ItemDetailContainer.scss";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    setLoading(true);

    const productos = collection(db, "items");

    const docRef = doc(productos, params.itemid);

    getDoc(docRef)
      .then((resp) => {
        setItem({
          id: resp.id,
          ...resp.data(),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.itemid]);

  return (
    <div className="itemDetailContainer">
      <h2>Item Details</h2>
      <hr />
      {loading ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};
