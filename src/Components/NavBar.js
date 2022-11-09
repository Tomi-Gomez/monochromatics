
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Styles/NavBar.css"
import CardWidget from './CardWidget'
import {Link} from 'react-router-dom';


function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link to="/"><b><i>MONOCHROMATICS</i></b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">Inicio</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/category/1">{props.ItemList}</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/category/2">{props.ItemList2}</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/category/3">{props.ItemList3}</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CardWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;