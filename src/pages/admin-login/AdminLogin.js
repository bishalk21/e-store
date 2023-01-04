import React, { useRef, useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import {Button, Container, Form} from 'react-bootstrap'
import { CustomInputField } from '../../components/customInputField'
import { useDispatch } from 'react-redux'
import { loginUserAction } from './admin-reducer-action/adminUserAction'

export const AdminLogin = () => {

  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  // useRef to access DOM node of component or access data of component
  // const emailRef = useRef();
  // const passwordRef = useRef();

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form, [name]: value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(loginUserAction(form))
  }

  return (
    <>
      <MainLayout>
        <Container className="page-main">
          <div className="form">
            <h1>Welcome Back!</h1>
            <Form onSubmit={handleOnSubmit}>
              <CustomInputField label="Email" type="email" name="email" required placeholder="Enter your email" onChange={handleOnChange} />
              <CustomInputField label="Password" type="password" name="password" required placeholder="**********" onChange={handleOnChange}/>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </Container>
      </MainLayout>
    </>
  )
}
