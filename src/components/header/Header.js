import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "../../pages/system-st/SystemSlice.js";
import { logoutAdminUserAction } from "../../pages/login/userAction.js";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.admin);

  const handleShow = () => dispatch(setShowMenu(true));

  const hanldeOnLogout = () => {
    // dispatch(setShowMenu(false));
    dispatch(logoutAdminUserAction());
    navigate("/");
  };

  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="md">
        <Container>
          <div>
            {user._id && <i class="fa-solid fa-bars" onClick={handleShow}></i>}
            <Navbar.Brand href="/"> eStore </Navbar.Brand>{" "}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user._id ? (
                <Link className="nav-link" to="/" onClick={hanldeOnLogout}>
                  Logout{" "}
                </Link>
              ) : (
                (
                  <Link className="nav-link" to="/">
                    {" "}
                    Login{" "}
                  </Link>
                ) && (
                  <Link className="nav-link" to="/register">
                    {" "}
                    Register{" "}
                  </Link>
                )
              )}
            </Nav>{" "}
          </Navbar.Collapse>{" "}
        </Container>{" "}
      </Navbar>{" "}
    </div>
  );
};
