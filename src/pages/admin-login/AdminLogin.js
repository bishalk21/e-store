import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/main-layout/MainLayout";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInputField } from "../../components/custom-input-field/customInputField";
import { useDispatch, useSelector } from "react-redux";
import {
  autoLogin,
  loginUserAction,
} from "./admin-reducer-action/adminUserAction";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // geting admin user from store
  const { adminUsers } = useSelector((state) => state.adminUser);

  // redirect to dashboard if admin user is logged in
  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/dashboard";

  useEffect(() => {
    // adminUsers._id && navigate(origin);
    adminUsers._id ? navigate(origin) : dispatch(autoLogin());
  }, [navigate, dispatch, origin, adminUsers._id]);

  // useRef to access DOM node of component or access data of component
  // const emailRef = useRef();
  // const passwordRef = useRef();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(loginUserAction(form));
  };

  return (
    <>
      <MainLayout>
        <Container className="page-main">
          <div className="form">
            <h1>Welcome Back!</h1>
            <Form onSubmit={handleOnSubmit}>
              <CustomInputField
                label="Email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
              <CustomInputField
                label="Password"
                type="password"
                name="password"
                required
                placeholder="**********"
                onChange={handleOnChange}
              />

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>

            <div className="text-end">
              Forgot <Link to="/reset-password"> Password?</Link>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};
