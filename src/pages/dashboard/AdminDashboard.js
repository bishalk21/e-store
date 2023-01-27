import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { CustomTable } from "../../components/custom-table/CustomTable";
import { MainLayout } from "../../components/main-layout/MainLayout";
import { getProductAction } from "../products/product-slice-action/productAction";

export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductAction());
  }, [ dispatch]);

  // active products
  const activeProducts = productList.filter(
    (product) => product.status === "active"
  );

  const clientTableHead = ["First Name", "Last Name", "Joined Date"];

  const clientTableInfo = [
    {
      firstName: "Bishal",
      lastName: "Karki",
      joinedAt: "30-10-2020",
    },
    {
      firstName: "Bishal",
      lastName: "Karki",
      joinedAt: "30-10-2020",
    },
    {
      firstName: "Bishal",
      lastName: "Karki",
      joinedAt: "30-10-2020",
    },
  ];

  const orderHead = [
    "Status",
    "Payment Status",
    "Name",
    "Ordered Date",
    "Total Quantity",
    "Order Total",
  ];

  const OrderInfo = [
    ["Pending", "Paid", "Bishal Karki", "02-02-2022", 2, 234],
    ["Paid", "Paid", "Bishal Karki", "02-02-2022", 2, 234],
    ["Cancelled", "Paid", "Bishal Karki", "02-02-2022", 2, 234],
    ["Pending", "Paid", "Bishal Karki", "02-02-2022", 2, 234],
  ];

  return (
    <MainLayout>
      <Container>
        <Row className="py-3">
          <Col>
            {" "}
            <h2>Admin Dashboard</h2>
            <small>Everything here</small>
          </Col>
          <Col className="d-flex align-items-center justify-content-center gap-2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <Form.Control type="text" placeholder="Search Product" />
          </Col>
        </Row>

        <hr />

        {/* Product summary */}
        <div className="product-summary mt-3">
          <h3>Product Summary</h3>
          <hr />
          <Row className="g-3">
            <Col md={4}>
              <CustomCard title={productList.length} text="Total Product" />
            </Col>
            <Col md={4}>
              <CustomCard title={activeProducts.length} text="Active" />
            </Col>
            <Col md={4}>
              <CustomCard
                title={productList.length - activeProducts.length}
                text="Inactive"
              />
            </Col>
          </Row>
        </div>

        {/* client summary */}
        <div className="mt-3">
          <h3>Client Summary</h3>
          <hr />
          <CustomTable
            tableHead={clientTableHead}
            tableData={clientTableInfo}
          />
        </div>

        {/* order summary */}
        <div className="mt-3">
          <h3>
            Recent Orders{" "}
            <Link to="/orders" className="text-decoration-none ">
              View all orders
            </Link>
          </h3>
          <hr />
          <CustomTable tableHead={orderHead} tableData={OrderInfo} />
        </div>
      </Container>
    </MainLayout>
  );
};
