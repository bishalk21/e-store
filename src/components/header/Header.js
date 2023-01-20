import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import { setShowSideMenu } from "../../pages/system-state/systemStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../pages/admin-login/admin-reducer-action/adminUserAction";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminUsers } = useSelector((state) => state.adminUser);
  const handleShow = () => dispatch(setShowSideMenu(true));

  const handleOnLogout = () => {
    dispatch(logoutUserAction());
    navigate("/");
  };

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
              <>
                <Link className="nav-link" to="/admin-profile">
                  <i class="fa-solid fa-user"></i> Profile
                </Link>

                <Link className="nav-link" to="/" onClick={handleOnLogout}>
                  <i class="fa-solid fa-right-from-bracket"></i> Logout
                </Link>
              </>
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
