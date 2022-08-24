import React, { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoriesAction,
} from "../../pages/category/categoriesAction";
import { setModalShow } from "../../pages/system-st/SystemSlice";
import { EditCatForm } from "../cat-form/EditCatForm";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState({});

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    // useEffect is a hook that runs after every render
    dispatch(getCategoriesAction());
  }, []);

  const parentCats = categories.filter(({ parentId }) => !parentId);

  const childCats = categories.filter(({ parentId }) => parentId);

  const handleOnEdit = (cat) => {
    setSelectedCategory(cat);
    dispatch(setModalShow());
  };

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategoryAction(_id));
    }
  };

  return (
    <Row>
      <EditCatForm selectedCategory={selectedCategory} />
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
                <tr
                  key={item._id}
                  style={{
                    backgroundColor:
                      item.status === "active" ? "#dff0d8" : "#f2dede",
                  }}
                >
                  {" "}
                  <td
                    className={
                      item.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    {item.status}
                  </td>
                  <td>{item.name}</td> {/* <td>{item.action}</td>{" "} */}
                  <td>{item.parentId ? "Children" : "Parent"}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleOnDelete(item._id)}
                    >
                      Delete
                    </Button>{" "}
                    <Button
                      variant="warning"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>

                {childCats.map(
                  (cat, i) =>
                    cat.parentId === item._id && (
                      <tr
                        key={cat._id}
                        className={
                          cat.status === "active"
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {" "}
                        <td
                          className={
                            cat.status === "active"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {cat.status}
                        </td>
                        <td>{cat.name}</td> {/* <td>{cat.action}</td>{" "} */}
                        <td>{cat.parentId ? "Children" : "Parent"}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleOnDelete(cat._id)}
                          >
                            Delete
                          </Button>{" "}
                          <Button
                            variant="warning"
                            onClick={() => handleOnEdit(cat)}
                          >
                            Edit
                          </Button>
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
