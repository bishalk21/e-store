import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { setShowSideMenu } from "../../pages/system-state/systemStateSlice";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const { adminUsers } = useSelector((state) => state.adminUser);
  const handleShow = () => dispatch(setShowSideMenu(true));

  return (
    <Navbar collapseOnSelect bg="info" expand="md">
      <Container>
        <div>
          {adminUsers._id && (
            <i class="fa-solid fa-burger" onClick={handleShow}></i>
          )}
          <Navbar.Brand href="/"> FEWASTORE</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {adminUsers._id ? (
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
