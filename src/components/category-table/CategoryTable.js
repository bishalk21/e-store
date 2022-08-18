import React, { useEffect } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../pages/category/categoriesAction";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  console.log(categories);

  useEffect(() => {
    // useEffect is a hook that runs after every render
    dispatch(getCategoriesAction());
  }, []);

  const parentCats = categories.filter(({ parentId }) => !parentId);

  const childCats = categories.filter(({ parentId }) => parentId);

  return (
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
          {parentCats.length > 0 &&
            parentCats.map((item, i) => (
              <>
                <tr key={item._id} className="bg-info">
                  {" "}
                  <td>{item.status}</td>
                  <td>{item.name}</td> {/* <td>{item.action}</td>{" "} */}
                  <td>{item.parentId ? "Children" : "Parent"}</td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>

                {childCats.map(
                  (cat, i) =>
                    cat.parentId === item._id && (
                      <tr key={cat._id}>
                        {" "}
                        <td>{cat.status}</td>
                        <td>{cat.name}</td> {/* <td>{cat.action}</td>{" "} */}
                        <td>{cat.parentId ? "Children" : "Parent"}</td>
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
  );
};
