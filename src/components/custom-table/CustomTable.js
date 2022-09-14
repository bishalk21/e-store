import React from "react";
import { Table } from "react-bootstrap";

export const CustomTable = ({ tableHead = [], tableData = [] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">#</th>
          {tableHead.map((head, i) => (
            <th key={i}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((user, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            {Object.keys(user).map((key, j) => (
              <td>{user[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
