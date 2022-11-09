import { data } from "../utils/data";
import Item from "./Item";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetail = ({dato}) => {


  return (
    <>
    {
      <Card style={{ width: '18rem', float:'center' , margin:'50px'}}>
     <Card.Header>{dato.title}</Card.Header>
      <Card.Img variant="top" src={dato.Img} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${dato.price}</ListGroup.Item>
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