const ItemListContainer = ({ saludo, texto } /* props */) => {
  /* Se puede desestructurar props en el parametro 
  const { saludo, texto } = props;
   */

  return (
    <div>
      <h1>{saludo}</h1>
      <p>{texto}</p>
    </div>
  );
};

export default ItemListContainer;
