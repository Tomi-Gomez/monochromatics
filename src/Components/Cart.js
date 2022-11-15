import { Link } from "react-router-dom";
import "./Styles/Cart.css";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext);
    

    return (
        <>
        <div className="contedor_Carrito">
        <h1 className="title_carrito"><b><i>Carrito</i></b></h1>
        </div>
        <div className="contendor-selectores">
            <div className="contenedor_Button">
                <Link to="/"><Button variant="info" className="Button_Contenedor">Volver a productos</Button></Link>
            </div>
            <div className="contenedor_Mensaje">
            <Button variant="info" className="texto_cantidad">Tu carrito esta vacio</Button>
            </div>
            <ul>
                {
                    test.CartList.length === 0 
                    ? <li> No hay productos en el carrito </li>
                    : test.CartList.map(dato => <li>{dato.name}</li>)
                }
            </ul>
        </div>
        </>
    );
}

export default Cart;