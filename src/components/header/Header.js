import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { adminLogout } from "../../pages/login/userAction";
import { setShowSideMenu } from "../../pages/system-state/systemSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.admin);
  const handleShow = () => dispatch(setShowSideMenu(true));

  const hanldeOnLogout = () => {
    dispatch(adminLogout());
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect bg="#fff" variant="light" expand="md">
      <Container>
        <div>
          {" "}
          {user._id && (
            <i className="fa-solid fa-bars" onClick={handleShow}>
              {" "}
            </i>
          )}{" "}
          <Navbar.Brand href="#"> eStore </Navbar.Brand>{" "}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {user._id ? (
              <>
                <Link className="nav-link" to="/admin-profile">
                  <i className="fa-solid fa-user"> </i> Profile{" "}
                </Link>
                <Link className="nav-link" to="/" onClick={hanldeOnLogout}>
                  <i className="fa-solid fa-sign-out"> </i> Logout{" "}
                </Link>{" "}
              </>
            ) : (
              <>
                <Link className="nav-link" to="/">
                  <i className="fa-solid fa-sign-in"> </i> Login{" "}
                </Link>{" "}
                <Link className="nav-link" to="/register">
                  <i className="fa-solid fa-user-plus"> </i> Register{" "}
                </Link>{" "}
              </>
            )}{" "}
          </Nav>{" "}
        </Navbar.Collapse>{" "}
      </Container>{" "}
    </Navbar>
  );
};
