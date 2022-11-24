import Item from "./Item";


const ItemList = ({datos}) => {


  return (
    <>
    {
      datos.length > 0
    ? datos.map((data) => 
      <Item 
      key={data.id} 
      title={data.title} 
      genero={data.genero} 
      talles={data.talles}
      Img={data.Img}
      price={data.price}
      id={data.id}
      />)
    : <p>...Cargando</p>  
    }
    </>
  );
}

export default ItemList;