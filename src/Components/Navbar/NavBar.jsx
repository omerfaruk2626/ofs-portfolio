import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss';

function HeaderNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
          <Navbar.Brand href="/" className="logo">O<span class="text-danger">F</span>S</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/technologies">Technologies</Nav.Link>
            <Nav.Link to="/projects">Projects</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default HeaderNavbar;
