import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss';

function HeaderNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
          <Navbar.Brand href="/" className="logo">O<span class="text-danger">F</span>S</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/technologies">Technologies</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default HeaderNavbar;
