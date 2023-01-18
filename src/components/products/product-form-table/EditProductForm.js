import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../../pages/categories/category-reducer/categoryAction";
import {
  postProductAction,
  updateProductAction,
} from "../../../pages/products/product-slice-action/productAction";
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
  thumbnail: "",
};

export const EditProductForm = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [imgToDelete, setImageToDelete] = useState([]);

  const { selectedProduct } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    !categories.length && dispatch(fetchCategoriesAction());
    setForm(selectedProduct);
  }, [categories, selectedProduct, dispatch]);

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    // console.log(files);
    setImages(files);
  };

  const handleOnImageDelete = (e) => {
    const { checked, name, value } = e.target;

    if (checked) {
      setImageToDelete([...imgToDelete, value]);
    } else {
      setImageToDelete(imgToDelete.filter((img) => img !== value));
    }
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
      disabled: true,
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

    // destructure the data that we do not need to send to server
    const { slug, sku, rating, createdAt, updatedAt, __v, ...rest } = form;

    //append form data
    for (const key in rest) {
      formData.append(key, rest[key]);
    }

    // append images
    images.length &&
      [...images].map((image) => formData.append("newImages", image));

    // attach item or images that need to be deleted
    formData.append("imgToDelete", imgToDelete);

    dispatch(updateProductAction(formData));
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
                (item) =>
                  item.parentCatId && (
                    <option
                      key={item}
                      value={item._id}
                      selected={item._id === form.parentCatId}
                    >
                      {item.name}
                    </option>
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

        <div className="my-5 d-flex flex-wrap">
          {selectedProduct?.images &&
            selectedProduct.images.map((imgLink) => (
              <div className="p-1" key={imgLink}>
                <Form.Check
                  type="radio"
                  label="Use as Thumbnail"
                  value={imgLink}
                  name="thumbnail"
                  checked={imgLink === form.thumbnail}
                  onChange={handleOnChange}
                />
                <img
                  src={process.env.REACT_APP_SERVER_ROOT + imgLink}
                  width="150px"
                  alt=""
                  crossOrigin="anonymous"
                />
                <Form.Check
                  label="Delete"
                  value={imgLink}
                  onChange={handleOnImageDelete}
                />
              </div>
            ))}
        </div>

        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
    </>
  );
};
