import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategoriesAction } from "../../../pages/categories/category-reducer/categoryAction";

const initialState = {
  status: "inactive",
  parentCatId: "",
  name: "",
};

export const CategoryForm = () => {
  const [form, setForm] = useState(initialState);
  const { categories } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(postCategoriesAction(form));
  };

  return (
    <>
      <Form className="py-4 mb-5 shadow rounded px-2" onSubmit={handleOnSubmit}>
        <h4 className="mb-3">Add New Category</h4>
        <Row className="g-2">
          <Col md="2">
            <Form.Group>
              <Form.Check
                name="status"
                label="status"
                type="switch"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>

          <Col md="3">
            <Form.Group>
              <Form.Select name="parentCatId" onChange={handleOnChange}>
                <option value="">Select Parent Category</option>
                {categories.length > 0 &&
                  categories.map(
                    (item, i) =>
                      !item.parentCatId && (
                        <option key={i} value={item._id}>
                          {item.name}
                        </option>
                      )
                  )}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md="5">
            <Form.Group>
              <Form.Control
                name="name"
                placeholder="Category Name"
                type="text"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>

          <Col md="2">
            <Button variant="primary" type="submit">
              Add Category
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
