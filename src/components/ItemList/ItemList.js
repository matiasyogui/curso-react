import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.scss";

export const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
