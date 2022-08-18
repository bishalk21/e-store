import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postNewCategoryAction } from "../../pages/category/categoriesAction";

const initialState = {
  status: "inactive",
  name: "",
  parentId: null,
};
export const AddCatForm = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const handleOnChange = (e) => {
    let { checked, value, name } = e.target;

    // console.log(checked, value, name);
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(postNewCategoryAction(form));
  };

  return (
    <Form
      className="border p-3 mb-5 bg-white rounded py-5"
      onSubmit={handleOnSubmit}
    >
      <h4 className="mb-4">Add New Category</h4>
      <Row className="g-2 shadow-sm ">
        <Col md="2">
          <Form.Check
            type="switch"
            name="status"
            label="status"
            onChange={handleOnChange}
          />
        </Col>
        <Col md="4">
          <FormGroup>
            <Form.Select name="parentId" onChange={handleOnChange}>
              <option value="">Select Parent Category</option>
              {categories.length > 0 &&
                categories.map(
                  (item) =>
                    !item.parentId && (
                      <option value={item._id}>{item.name}</option>
                    )
                )}
            </Form.Select>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Category Name"
              onChange={handleOnChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md="2">
          <Button variant="primary" type="submit">
            Add Category
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
