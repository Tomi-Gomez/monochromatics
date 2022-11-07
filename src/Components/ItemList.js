import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {useState} from 'react'
import data from '../utils/data'


const ItemList = () => {
  const [rate,setRate] = useState(0);
  const stockMaximo = 10;
  const stockMinimo = 0;

  const rateVideo = () => {
    if(rate >= stockMaximo){
    alert("No hay mas stock")
    } else{
      setRate(rate + 1)
    }
  }

  const restVideo = () => {
    if(rate <= stockMinimo){
     alert("Error,seleccione al menos 1 prenda") 
    }else{
      setRate(rate - 1)
    }
  }

  return (
    <>

    // <Card style={{ width: '18rem', float:'left' , margin:'50px',justifycontent:'center', alingitems:"center"}}>
    //   <Card.Img variant="top" src={props.Img}/>
    //   <Card.Body>
    //     <Card.Title><h4>{props.title}</h4></Card.Title>
    //     <Card.Text>
    //             <p>{props.genero}</p>
    //             <p>{props.material}</p>
    //             <p>{props.talles}</p>
    //     </Card.Text>
    //     <span>Cantidad: {rate} </span> 
    //     <br></br> 
    //     <Button variant="outline-dark" onClick={rateVideo}>+</Button> | <Button variant="outline-dark" onClick={restVideo}>-</Button>
    //     <Button variant="info" >Agregar al carrito</Button>
    //   </Card.Body>
    // </Card>
    </>
  );
}

export default ItemList;