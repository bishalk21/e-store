import React from "react";
import { ListGroup } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShowSideMenu } from "../../pages/system-state/systemStateSlice";

export const SideMenu = () => {
  const dispatch = useDispatch();

  const { showSideMenu } = useSelector((state) => state.systemState);

  const handleClose = () => dispatch(setShowSideMenu(false));

  return (
    <>
      <Offcanvas show={showSideMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>FEWASTORE CMS Admin Panel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <Link to="/dashboard" className="nav-link">
                <i class="fa-solid fa-home"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/categories" className="nav-link">
                <i class="fa-solid fa-list"></i> Categories
              </Link>
            </ListGroup.Item>

            <ListGroup.Item>
              <Link to="/products" className="nav-link">
                <i class="fa-solid fa-box"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/payment" className="nav-link">
                {/* Payment Methods */}
                <i class="fa-solid fa-credit-card"></i> Payment Methods
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/users" className="nav-link">
                <i class="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/orders" className="nav-link">
                <i class="fa-solid fa-shopping-cart"></i> Orders
              </Link>
              {/* orders */}
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/reviews" className="nav-link">
                <i class="fa-solid fa-star"></i> Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/settings" className="nav-link">
                <i class="fa-solid fa-cog"></i> Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
