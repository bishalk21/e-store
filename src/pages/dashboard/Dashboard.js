import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { CustomTable } from "../../components/custom-table/CustomTable";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { getProductsAction } from "../products/productAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const clientTableHead = ["First Name", "Last Name", "joined Date"];
  const clientInfo = [
    {
      fName: "prem",
      lName: "Acharya",
      joinedAt: "30/10/2020",
    },
    {
      fName: "prem",
      lName: "Acharya",
      joinedAt: "30/10/2020",
    },
    {
      fName: "prem",
      lName: "Acharya",
      joinedAt: "30/10/2020",
    },
    {
      fName: "prem",
      lName: "Acharya",
      joinedAt: "30/10/2020",
    },
  ];

  const orderHead = [
    "Status",
    "payment Status",
    "Name",
    "ordered Date",
    "Total Qty",
    "Order Total",
  ];

  const orderInfo = [
    ["Pending", "paid", "Prem Acharya", "2-2-2022", 2, 888],
    ["shipped", "paid", "Prem Acharya", "2-2-2022", 2, 33],
    ["cancelled", "paid", "Prem Acharya", "2-2-2022", 2, 444],
    ["Pending", "paid", "Prem Acharya", "2-2-2022", 2, 55],
  ];

  const activeProduct = productList.filter((item) => item.status === "active");
  return (
    <AdminLayout>
      <h4>Dashboard</h4>
      <hr />

      {/* product summary */}
      <div className="dashboard-product mt-3 py-3">
        <h5>Product Summary</h5>
        <hr />
        <Row className="g-3">
          <Col md="4">
            <CustomCard count={productList.length} title="Total Product" />
          </Col>
          <Col md="4">
            <CustomCard count={activeProduct.length} title="Active" />
          </Col>
          <Col md="4">
            <CustomCard
              count={productList.length - activeProduct}
              title="Inactive"
            />
          </Col>
        </Row>
      </div>
      {/* last 5 orders */}
      <div className="my-5">
        <h5>New Clients</h5>
        <hr />
        <CustomTable tabelHead={clientTableHead} tableData={clientInfo} />
      </div>

      {/* client summary */}
      <div className="my-5">
        <h5>
          Recent orders{" "}
          <Link to="/orders" className="text-decoration-none">
            View all orders
          </Link>
        </h5>
        <hr />
        <CustomTable tabelHead={orderHead} tableData={orderInfo} />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
