import React from "react";
import { Col, Row } from "react-bootstrap";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { CustomTable } from "../../components/custom-table/CustomTable";
import { AdminLayout } from "../../components/layout/AdminLayout";

const Dashboard = () => {
  const clientTableHead = ["First Name", "Last Name", "joined date"];

  const clientTableData = [
    {
      fName: "Bishal",
      lName: "Karki",
      joinedDate: "20-02-2022",
    },
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
            <CustomCard count="100" title=" Total Products" />
          </Col>
          <Col md={4}>
            <CustomCard count="48" title=" Total Products" />
          </Col>
          <Col md={4}>
            <CustomCard count="34" title=" Total Products" />
          </Col>
        </Row>
      </div>
      {/* client summary */}
      <div className="clientSummary py-3">
        <h4 className="fw-bold">Client Summary</h4>
        <hr />
        <CustomTable tableHead={clientTableHead} tableData={clientTableData} />
      </div>
      {/* order summary */}
      <div className="clientSummary py-3">
        <h4 className="fw-bold">Order Summary</h4>
        <hr />
        <CustomTable tableHead={orderTableHead} tableData={orderTableData} />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
