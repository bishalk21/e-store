import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MainLayout } from "../../components/main-layout/MainLayout";
import {
  deleteAdminUserAction,
  getAllAdminUserAction,
} from "../admin-login/admin-reducer-action/adminUserAction";

export const AdminUsers = () => {
  const dispatch = useDispatch();

  const { adminUsers, allAdminUsers } = useSelector((state) => state.adminUser);
  // console.log(allAdminUsers);

  useEffect(() => {
    dispatch(getAllAdminUserAction());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteAdminUserAction(_id));
    }
  };

  return (
    <MainLayout>
      <Container>
        <h2 className="py-3">Admin Users Management</h2>
        <hr />

        <div className="text-end py-3">
          <Link to="/register">
            <Button variant="warning">Add New System Admin</Button>
          </Link>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allAdminUsers?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.status}</td>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(item._id)}
                    disabled={item?._id === adminUsers?._id}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </MainLayout>
  );
};
