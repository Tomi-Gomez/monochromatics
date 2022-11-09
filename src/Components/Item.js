import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import ItemStyles from "./Styles/Item.css"
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";


const Item = (props,id) => {
   
return (
    <>
    <Card className="card" style={{ width: '18rem', float:'left' , margin:'15px',justifycontent:'center', alingitems:'center',cursor:"pointer"}}>
    <Card.Img variant="top" src={props.Img}/>
    <Card.Body>
    <Card.Title><h4>{props.title}</h4></Card.Title>
    <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.talles}</ListGroup.Item>
        <ListGroup.Item>${props.price}</ListGroup.Item>
        <Button variant="outline-secondary"><Link to={'/item/${id}'}>Detalle</Link></Button>
      </ListGroup>
    <ItemCount/>
    </Card.Body>
    </Card>
    </>
   )
}

export default Item
