import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShowMenu } from "../../pages/system-st/SystemSlice";

export const SideMenu = () => {
  const dispatch = useDispatch();

  const { showSideMenu } = useSelector((state) => state.system);

  const handleClose = () => dispatch(setShowMenu(false));

  return (
    <>
      <Offcanvas show={showSideMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> CMS Admin Panel </Offcanvas.Title>{" "}
        </Offcanvas.Header>{" "}
        <hr />
        <Offcanvas.Body>
          <ListGroup variant="flush" className="list-group-flush fs-5">
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="categories" className="nav-link">
                <i class="fa-solid fa-list"></i> Users Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="products" className="nav-link">
                <i class="fa-solid fa-box"></i> Users Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-money-bill-1 "></i> Users Orders Payment
                Methods
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-table-list"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-star-half-stroke"></i> Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                {" "}
                <i class="fa-solid fa-gear"></i> Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>{" "}
      </Offcanvas>{" "}
    </>
  );
};
