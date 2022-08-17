import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CustomInoutFiedld } from "../../components/customInoutField/CustomInoutFiedld";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { loginAdminUserAction } from "./userAction";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.admin);

  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user, navigate]); // dependency array

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(loginAdminUserAction(form));
  };
  return (
    <div>
      {" "}
      <Header />
      <Container className="page-min">
        <div className="form">
          <h3 className="text-start mb-3"> Welcome Back ! </h3>{" "}
          <Form onSubmit={handleOnSubmit}>
            {" "}
            {}{" "}
            <CustomInoutFiedld
              onChange={handleOnChange}
              label="Email"
              type="email"
              name="email"
              required
              placeholder="Enter Email"
            />
            <CustomInoutFiedld
              onChange={handleOnChange}
              label="Password"
              type="password"
              name="password"
              required
              placeholder="Enter Password"
            />
            {/* forget password */}{" "}
            <div className="text-end text">
              <a href="#"> Forget Password ? </a>{" "}
            </div>
            {/* Register */}
            <div className="text-end text">
              <Link to="/register"> Register </Link>{" "}
            </div>
            <Button variant="primary" type="submit">
              Submit{" "}
            </Button>{" "}
          </Form>{" "}
        </div>{" "}
      </Container>{" "}
      <Footer />
    </div>
  );
};
