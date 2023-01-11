import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoriesAction } from "../../../pages/categories/category-reducer/categoryAction";
import ContentModal from "../../modal/contentModal";

const initialState = {
  status: "inactive",
  parentCatId: "",
  name: "",
};

export const EditCategoryForm = ({ categorySelect }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { categories } = useSelector((state) => state.category);

  // after component rerenders
  useEffect(() => {
    setForm(categorySelect);
  }, [categorySelect]);

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { __v, slug, createdAt, updatedAt, ...rest } = form;
    // console.log(form);
    dispatch(updateCategoriesAction(rest));
  };

  // console.log(form);

  return (
    <>
      <ContentModal title="Edit Category">
        <Form
          className="py-4 mb-5 shadow rounded px-2 expand-lg"
          onSubmit={handleOnSubmit}
        >
          <Row className="g-2">
            <Col md="2">
              <Form.Group>
                <Form.Check
                  name="status"
                  label="status"
                  type="switch"
                  checked={form.status === "active"}
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
                      (item) =>
                        !item.parentCatId && (
                          <option
                            value={item._id}
                            selected={item._id === form.parentCatId}
                          >
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
                  value={form.name}
                  placeholder="Category Name"
                  type="text"
                  required
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>

            <Col md="2">
              <Button variant="primary" type="submit">
                Update Category
              </Button>
            </Col>
          </Row>
        </Form>
      </ContentModal>
    </>
  );
};
