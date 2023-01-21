import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { MainLayout } from "../../../components/main-layout/MainLayout";
import { RequestOtp } from "../../../components/password-reset/RequestOtp";
import { ResetPassword } from "../../../components/password-reset/ResetPassword";
import { resetAdminUserPassword } from "../../../helpers/axiosHelper";

export const AdminResetPassword = () => {
  const [passwordForm, setPasswordForm] = useState("otp");
  const [resp, setResp] = useState({});

  // const showForm = "otp"; // password
  //   const { passwordForm } = useSelector((state) => state.systemState);

  const handleOnOtpReq = async (email) => {
    if (!email) {
      return alert("No email received");
    }

    const response = await resetAdminUserPassword({ email });

    setResp(response);
    response.status === "success" && setPasswordForm("password");
  };

  const handleOnPasswordReset = (e) => {
    e.preventDefault();
  };

  const form = {
    otp: <RequestOtp handleOnOtpReq={handleOnOtpReq} />,
    password: <ResetPassword handleOnPasswordReset={handleOnPasswordReset} />,
  };

  return (
    <MainLayout>
      <Container className="py-5">
        {resp.message && (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp.message}
          </Alert>
        )}
        {/* <div className="pass-forms">{form[showForm]}</div> */}
        <div className="pass-forms">{form[passwordForm]}</div>
      </Container>
    </MainLayout>
  );
};
