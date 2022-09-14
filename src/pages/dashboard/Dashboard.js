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
    !productList.length && dispatch(getProductsAction());
  }, [productList]);

  const clientTableHead = ["First Name", "Last Name", "joined date"];
  const clientTableData = [
    {
      fName: "Bishal",
      lName: "Karki",
      joinedDate: "20-02-2022",
    },
  ];
  const orderTableHead = [
    "Status",
    "Product Name",
    "Payment Status",
    "Ordered Date",
    "Total",
  ];
  const orderTableData = [
    ["shipped", "Product Name", "Payment Status", "Ordered Date", "Total"],
  ];

  const activeProduct = productList.filter((item) => item.status === "active");
  return (
    <AdminLayout>
      <h4>Dashboard</h4>
      <hr />
      {/* products */}
      <div className="products">
        <h4 className="fw-bold">Products</h4>
        <hr />
        <Row className="g-4">
          <Col md={4}>
            <CustomCard count={productList.length} title=" Total Products" />
          </Col>
          <Col md={4}>
            <CustomCard count={activeProduct.length} title="Active" />
          </Col>
          <Col md={4}>
            <CustomCard
              count={productList.length - activeProduct.length}
              title="Inactive"
            />
          </Col>
        </Row>
      </div>
      {/* client summary */}
      <div className="clientSummary py-3">
        <h4 className="fw-bold">Clients Details</h4>
        <hr />
        <CustomTable tableHead={clientTableHead} tableData={clientTableData} />
      </div>
      {/* order summary */}
      <div className="clientSummary py-3">
        <h4 className="fw-bold">Order Summary</h4>
        <Link to="/orders" className="text-decoration-none">
          <span className="text-primary">View All</span>
        </Link>
        <hr />
        <CustomTable tableHead={orderTableHead} tableData={orderTableData} />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
