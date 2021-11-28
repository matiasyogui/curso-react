import { ItemCount } from "../ItemCount/ItemCount";

const ItemListContainer = ({ saludo, texto } /* props */) => {
  /* Se puede desestructurar props en el parametro 
  const { saludo, texto } = props;
   */

  return (
    <div>
      <ItemCount stock="10" />
    </div>
  );
};

export default ItemListContainer;
