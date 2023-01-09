import React, { useEffect } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../../pages/categories/category-reducer/categoryAction";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  // filtering parentId items
  // const parentCatItems = categories.filter((item) => !item.parentCatId);
  const parentCatItems = categories.filter(({ parentCatId }) => !parentCatId);

  // filtering childrenId items
  const childrenCatItems = categories.filter(({ parentCatId }) => parentCatId);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  return (
    <>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th>Label</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parentCatItems.length > 0 &&
              parentCatItems.map((item) => (
                <>
                  <tr key={item._id} className="bg-warning">
                    <td>{item.status}</td>
                    <td>{item.name}</td>
                    <td>{item.parentCatId ? "Children" : "Parent"}</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                  {childrenCatItems.map(
                    (cat) =>
                      cat.parentCatId === item._id && (
                        <tr key={cat._id}>
                          <td>{cat.status}</td>
                          <td>{cat.name}</td>
                          <td>{cat.parentCatId ? "Children" : "Parent"}</td>
                          <td>
                            <Button variant="danger">Delete</Button>
                          </td>
                        </tr>
                      )
                  )}
                </>
              ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};
