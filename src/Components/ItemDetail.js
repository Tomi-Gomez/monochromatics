import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Styles/ItemDetail.css"


const ItemDetail = ({dato}) => {


  return (
    <>
    { 
      <Card className="contenedorCard">
     <Card.Header><i>{dato.title}</i></Card.Header>
      <Card.Img variant="top" src={dato.Img} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>${dato.price}</b></ListGroup.Item>
        <ListGroup.Item>{dato.genero}</ListGroup.Item>
        <ListGroup.Item>{dato.talles}</ListGroup.Item>
      </ListGroup>
      <br/>
        <Card.Text>
          {dato.description}
        </Card.Text>
      </Card.Body>
    </Card>
    }
    <ItemCount/>
    </>
  );
}

export default ItemDetail