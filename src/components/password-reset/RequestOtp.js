import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { resetAdminUserPassword } from "../../helpers/axiosHelper";
// import { setPasswordForm } from "../../pages/system-state/systemStateSlice";

export const RequestOtp = ({ handleOnOtpReq }) => {
  //   const dispatch = useDispatch();
  const emailRef = useRef();
  //   const [resp, setResp] = useState({});

  //   const handleOnSubmit = async (e) => {
  //     e.preventDefault();

  //     const email = emailRef.current.value;

  //     if (email) {
  //       //   alert(email);
  //       const response = await resetAdminUserPassword({ email });

  //       setResp(response);

  //       //   response.status === "success" && dispatch(setPasswordForm("password"));
  //     }
  //   };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnOtpReq(emailRef.current.value);
  };

  return (
    <Container>
      <div className="form">
        {/* {resp.message && (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp.message}
          </Alert>
        )} */}

        <h2>Request OTP</h2>
        <hr />
        <Form className="py-2" onSubmit={handleOnSubmit}>
          <>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                ref={emailRef}
                placeholder="Enter your email"
                type="email"
                required
              />
            </Form.Group>
          </>

          <Form.Group className="d-grid gap-2">
            <Button variant="primary" type="submit  ">
              Request OTP
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
