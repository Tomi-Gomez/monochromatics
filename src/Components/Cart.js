import { Link } from "react-router-dom";
import "./Styles/Cart.css";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import { Card } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';




const Cart = () => {
    const test = useContext(CartContext);
    

    return (
        <>
        <div className="contedor_Carrito">
        <h1 className="title_carrito"><b><i>Carrito</i></b></h1>
        </div>
        <div className="contendor-selectores">
            <div className="contenedor_Button">
                <Link to="/"><Button variant="info" className="Button_Contenedor">Volver a comprar</Button></Link>
            </div>
            <Button variant="outline-danger" className="button_EP" onClick={test.clear}>Eliminar productos</Button>
        </div>
        <hr/>
            {
            test.CartList.length === 0 
            ?  <div className="contenedor_Mensaje">
            <Button variant="info" className="texto_cantidad">Tu carrito esta vacio</Button>
            </div>
            :  test.CartList.map(dato => 
                <Card className="cardPadre">
                <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={dato.Img}
                />
                <Card.Body>
                <Card.Title><h4><i>{dato.title}</i></h4></Card.Title>
                <div className="DivContenedorTotal">
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>${dato.price*dato.stock}</b></ListGroup.Item>
                    <ListGroup.Item><b>Stock:{dato.stock}</b></ListGroup.Item>
                </ListGroup>
                <Button className='Button_mas' variant="outline-dark" onClick={() => test.addToCart(dato.stock)}>Aagregar +</Button>
                <Button variant="outline-danger" onClick={() => test.removeItem(dato.id)}>Borrar </Button>
                </div>
                </Card.Body>
                </Card>
                )
            }
            
        </>
    );
}

export default Cart;