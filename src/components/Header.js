
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { setShowSideMenu } from '../pages/system-state/systemStateSlice';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(setShowSideMenu(true))

  return (
    <Navbar collapseOnSelect bg="info" expand="md" >
      <Container>
       <div><i class="fa-solid fa-burger" onClick={handleShow}></i>
       <Navbar.Brand href="/"> FEWASTORE</Navbar.Brand>
       </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/" >Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

