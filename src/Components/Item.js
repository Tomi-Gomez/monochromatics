import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "./Styles/Item.css"
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";


const Item = (props,id) => {
   
return (
    <>
    <Card className="cardPadre">
    <Card.Img variant="top" src={props.Img}/>
    <Card.Body>
    <Card.Title><h4>{props.title}</h4></Card.Title>
    <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.talles}</ListGroup.Item>
        <ListGroup.Item>${props.price}</ListGroup.Item>
        <Link to={`/item/${props.id}`}><Button variant="outline-secondary" className="Button_Detalle">Detalle</Button></Link>
      </ListGroup>
    <ItemCount/>
    </Card.Body>
    </Card>
    </>
   )
}

export default Item
