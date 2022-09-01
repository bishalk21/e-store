import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../pages/category/categoriesAction";
import { postProductAction } from "../../pages/products/ProductAction";
import { CustomInoutFiedld } from "../customInoutField/CustomInoutFiedld";

const initialState = {
  name: "",
  catId: null,
  description: "",
  price: 0,
  quantity: 0,
  sku: "",

  salesPrice: null,
  salesStartDate: null,
  salesEndDate: null,
};

export const AddProductForm = () => {
  const [form, SetProductForm] = useState(initialState); // product is holding the form data or initial state
  const [images, setImages] = useState([]); // images is holding the images data or initial state
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    !categories.length && dispatch(getCategoriesAction());
  }, [categories.length, dispatch]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    SetProductForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnChangeImage = (e) => {
    const { files } = e.target;
    console.log(files);
    setImages(files);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    // set data to form
    const formData = new FormData();
    // append form data to FormData
    for (const key in form) {
      formData.append(key, form[key]);
    }
    // append images to FormData
    images.length &&
      [...images].map((image) => formData.append("images", image));
    // dispatch postProductAction
    dispatch(postProductAction(formData));
  };

  const inputFields = [
    {
      name: "name",
      value: form.name,
      label: "Name",
      type: "text",
      placeholder: "Enter Product Name",
      required: true,
    },
    {
      name: "thumbnail",
    },
    {
      name: "sku",
      value: form.sku,
      label: "SKU",
      type: "text",
      placeholder: "Enter Product SKU",
      required: true,
    },
    {
      name: "quantity",
      value: form.quantity,
      label: "Quantity",
      type: null,
      placeholder: "Enter QTY",
    },

    {
      name: "price",
      value: form.price,
      label: "Price",
      type: "number",
      placeholder: "Enter Product Price",
      required: true,
    },
    {
      name: "salesPrice",
      value: form.salesPrice,
      label: "Sales Price",
      type: "number",
      placeholder: "Enter Product Sales Price",
      min: 1,
      required: true,
    },

    {
      name: "salesStartDate",
      value: form.salesStartDate,
      label: "Sales Start Date",
      type: "date",
      placeholder: "Enter Sales Start Date",
    },
    {
      name: "salesEndDate",
      value: form.salesEndDate,
      label: "Sales End Date",
      type: "date",
      placeholder: "Enter Sales End Date",
    },
    {
      name: "description",
      value: form.description,
      label: "Description",
      type: "text",
      rows: 4,
      as: "textarea",
      placeholder: "Enter Description",
      required: true,
    },
    {
      name: "images",
      type: "file",
      accept: "image/*",
      required: true,
    },
  ];
  return (
    <div>
      <Form
        className="mt-3 mb-3"
        onSubmit={handleOnSubmit}
        encType="multipart/form-data"
      >
        {" "}
        <Form.Group className="mt-3">
          <Form.Check
            // type="checkbox"
            label="Status"
            name="status"
            type="switch"
            checked={form.status === "active"}
            onChange={handleOnChange}
          />{" "}
        </Form.Group>{" "}
        {/* select category */}{" "}
        <Form.Group className="mb-3">
          <Form.Label> Assign to Category </Form.Label>{" "}
          <Form.Select name="catId" onChange={handleOnChange} required>
            <option value=""> Select Category </option>{" "}
            {categories.length > 0 &&
              categories.map(
                (item) =>
                  !item.parentId && (
                    <option value={item._id}> {item.name} </option>
                  )
              )}{" "}
          </Form.Select>{" "}
        </Form.Group>{" "}
        {inputFields.map((item, i) => (
          <CustomInoutFiedld
            key={i}
            {...item}
            onChange={
              item.name === "images" ? handleOnChangeImage : handleOnChange
            }
          />
        ))}{" "}
        {/* Button */}{" "}
        <Button variant="primary" type="submit">
          Submit{" "}
        </Button>{" "}
      </Form>{" "}
    </div>
  );
};
