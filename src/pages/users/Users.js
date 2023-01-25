import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../components/main-layout/MainLayout";
import { getUsersAction } from "../users/users-redux-actions/usersAction";

export const Users = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);
  return (
    <MainLayout>
      <Container>
        <h2 className="py-3">Users Management</h2>
        <hr />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Button variant="link">Info</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </MainLayout>
  );
};
