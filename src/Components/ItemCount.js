import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = () => {
    const [rate,setRate] = useState(0);

    const agregar = () => {
        if (rate >= 10){
            alert("Error no se puede agregar mas elementos")
        } else {
            setRate(rate + 1)
        }
    }

    const sacar = () => {
        if (rate <= 0){
            alert("Error no se puede agregar mas elementos")
        } else {
            setRate(rate - 1)
        }
    }

    return (
        <>
       <Button variant="outline-dark" onClick={agregar}> + </Button>  |  <span> {rate} </span> |<Button variant="outline-dark" onClick={sacar}> - </Button> 
        <Button variant="info" >Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;