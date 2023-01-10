import React, { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoriesAction,
  fetchCategoriesAction,
} from "../../../pages/categories/category-reducer/categoryAction";
import { setModalShow } from "../../../pages/system-state/systemStateSlice";
import { EditCategoryForm } from "../category-form/EditCategoryForm";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  // select category to edit in state
  const [categorySelect, setCategorySelect] = useState({});

  const { categories } = useSelector((state) => state.category);

  // filtering parentId items
  // const parentCatItems = categories.filter((item) => !item.parentCatId);
  const parentCatItems = categories.filter(({ parentCatId }) => !parentCatId);

  // filtering childrenId items
  const childrenCatItems = categories.filter(({ parentCatId }) => parentCatId);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, []);

  // edit click -----> content modal show
  const handleOnEdit = (cat) => {
    setCategorySelect(cat);
    dispatch(setModalShow());
  };

  // console.log("categorySelect", categorySelect);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategoriesAction(_id));
    }
  };

  return (
    <>
      <Row>
        <EditCategoryForm categorySelect={categorySelect} />
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
                  <tr key={item._id} className="bg-info">
                    <td
                      className={
                        item.status === "active"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {item.status}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.parentCatId ? "Children" : "Parent"}</td>
                    <td className="d-flex gap-1">
                      <Button
                        variant="danger"
                        onClick={() => handleOnEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleOnDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                  {childrenCatItems.map(
                    (cat) =>
                      cat.parentCatId === item._id && (
                        <tr key={cat._id}>
                          <td
                            className={
                              cat.status === "active"
                                ? "text-success"
                                : "text-danger"
                            }
                          >
                            {cat.status}
                          </td>
                          <td>{cat.name}</td>
                          <td>{cat.parentCatId ? "Children" : "Parent"}</td>
                          <td className="d-flex gap-1">
                            <Button
                              variant="danger"
                              onClick={() => handleOnEdit(cat)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => handleOnDelete(cat._id)}
                            >
                              Delete
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
    </>
  );
};
