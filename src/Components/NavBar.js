
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget'

function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><b><i>MONOCHROMATICS</i></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">{props.ItemList}</Nav.Link>
            <Nav.Link href="#link">{props.ItemList2}</Nav.Link>
            <Nav.Link href="#link">{props.ItemList3}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CardWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;