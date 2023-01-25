import React from "react";
import { Table } from "react-bootstrap";

export const CustomTable = ({ tableHead = [], tableData = [] }) => {
  return (
    <>
      <Table stripped hovered bordered>
        <thead>
          <tr>
            <th># </th>
            {tableHead.map((heading, i) => (
              <th key={i}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              {Object.keys(data).map((key, j) => (
                <td>{data[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
