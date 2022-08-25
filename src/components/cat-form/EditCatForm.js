import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  editCategoryAction,
  postNewCategoryAction,
} from "../../pages/category/categoriesAction";
import { CustomModal } from "../modal/modal";

const initialState = {
  status: "inactive",
  name: "",
  parentId: null,
};
export const EditCatForm = ({ selectedCategory }) => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const handleOnChange = (e) => {
    let { checked, value, name } = e.target;

    // console.log(checked, value, name);
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    setForm(selectedCategory);
  }, [selectedCategory]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);

    const { __v, slug, createdAt, updatedAt, ...rest } = form;

    dispatch(editCategoryAction(rest));
    console.log(rest);
  };

  return (
    <>
      <CustomModal title="Edit Category">
        <Form
          className="border p-1 mb-5 bg-white rounded py-5"
          onSubmit={handleOnSubmit}
        >
          <h4 className="mb-4"> Add New Category </h4>{" "}
          <Row className="g-2 shadow-sm ">
            <Col lg="2">
              <Form.Check
                type="switch"
                checked={form.status === "active"}
                name="status"
                label="status"
                onChange={handleOnChange}
              />{" "}
            </Col>{" "}
            <Col lg="4">
              <FormGroup>
                <Form.Select name="parentId" onChange={handleOnChange}>
                  <option value=""> Select Parent Category </option>{" "}
                  {categories.length > 0 &&
                    categories.map(
                      (item) =>
                        !item.parentId && (
                          <option
                            value={item._id}
                            selected={item._id === form.parentId}
                          >
                            {" "}
                            {item.name}{" "}
                          </option>
                        )
                    )}{" "}
                </Form.Select>{" "}
              </FormGroup>{" "}
            </Col>{" "}
            <Col lg="4">
              <FormGroup>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Enter Category Name"
                  onChange={handleOnChange}
                  required
                />
              </FormGroup>{" "}
            </Col>{" "}
            <Col lg="2">
              <Button variant="primary" type="submit">
                Update Category{" "}
              </Button>{" "}
            </Col>{" "}
          </Row>{" "}
        </Form>{" "}
      </CustomModal>{" "}
    </>
  );
};
