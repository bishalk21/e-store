import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../../pages/categories/category-reducer/categoryAction";
import { postProductAction } from "../../../pages/products/product-slice-action/productAction";
import { CustomInputField } from "../../custom-input-field/customInputField";

const initialState = {
  status: "inactive",
  parentCatId: null,
  name: "",
  sku: "",
  quantity: "",
  price: 0,
  salesPrice: null,
  salesStartDate: null,
  salesEndDate: null,
  description: "",
};

export const AddProductForm = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    !categories.length && dispatch(fetchCategoriesAction());
  }, [categories, dispatch]);

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    // console.log(files);
    setImages(files);
  };

  const inputFields = [
    {
      name: "name",
      value: form.name,
      label: "Name",
      type: "text",
      placeholder: "Product Name",
      required: true,
    },
    {
      name: "sku",
      value: form.sku,
      label: "SKU",
      type: "number",
      placeholder: "Product's Unique Code",
      required: true,
    },
    {
      name: "quantity",
      value: form.quantity,
      label: "Quantity",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      name: "price",
      value: form.price,
      label: "Price",
      type: "number",
      placeholder: "342",
      required: true,
      min: 1,
    },
    {
      name: "salesPrice",
      value: form.salesPrice,
      label: "Sales Price",
      type: "number",
      placeholder: "300",
    },
    {
      name: "salesStartDate",
      value: form.salesStartDate,
      label: "Sales Start Date",
      type: "date",
    },
    {
      name: "salesEndDate",
      value: form.salesEndDate,
      label: "Sales End Date",
      type: "date",
    },
    {
      name: "description",
      value: form.description,
      label: "Description",
      type: "text",
      placeholder: "About Product",
      as: "textarea",
      rows: 10,
      required: true,
    },
    {
      name: "images",
      type: "file",
      accept: "image/*",
      onChange: handleOnImageSelect,
      multiple: true,
    },
  ];

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // set data with FormData
    const formData = new FormData();

    //append form data
    for (const key in form) {
      formData.append(key, form[key]);
    }

    // append images
    images.length &&
      [...images].map((image) => formData.append("images", image));

    dispatch(postProductAction(formData));
  };

  return (
    <>
      <Form className="py-5" onSubmit={handleOnSubmit}>
        <Form.Group className="py-4">
          <Form.Check
            name="status"
            type="switch"
            label="Status"
            checked={form.status === "active"}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="py-3">
          <Form.Label>Assign to Category</Form.Label>
          <Form.Select name="parentCatId" required onChange={handleOnChange}>
            <option value=""> Select Parent Category</option>
            {categories.length > 0 &&
              categories.map(
                (item, i) =>
                  item.parentCatId && (
                    <option value={item._id}>{item.name}</option>
                  )
              )}
          </Form.Select>
        </Form.Group>

        {inputFields.map((item, i) => {
          return (
            <CustomInputField
              key={i}
              {...item}
              onChange={
                item.name === "images" ? handleOnImageSelect : handleOnChange
              }
            />
          );
        })}

        <Button variant="primary" type="submit">
          Submit Product
        </Button>
      </Form>
    </>
  );
};
