import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { fetchUsersAction } from "./userAction";

const Users = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <AdminLayout>
      <h3 className="py-3">Users Mgmt.</h3>
      <hr />
      <Table striped bordered hove>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Eamil</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                {item.fName} {item.lName}
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
    </AdminLayout>
  );
};

export default Users;
