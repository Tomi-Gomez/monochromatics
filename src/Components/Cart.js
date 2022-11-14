import { Link } from "react-router-dom";
import "./Styles/Cart.css";
import Button from 'react-bootstrap/Button';

const Cart = () => {
    return (
        <>
        <div className="contedor_Carrito">
        <h1 className="title_carrito">Carrito</h1>
        </div>
        <div>
            <Link to="/"><Button variant="info">Volver a productos</Button></Link>
        </div>
        </>
    );
}

export default Cart;