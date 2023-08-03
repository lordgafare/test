import {Container, Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"

function HeaderViews() {
  return (
    <div className="Header">
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">React-Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><FontAwesomeIcon icon={faHouse} />&nbsp;Home</Nav.Link>
            <Nav.Link href="/content">Content</Nav.Link>
            <Nav.Link href="/table">Table</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default HeaderViews;