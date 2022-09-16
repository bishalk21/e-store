import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { RequestOTP } from "../../components/reset-password/RequestOTP";
import { ResetPasswordForm } from "../../components/reset-password/ResetPasswordForm";
import {
  requestOtpresetAdminUserPassword,
  resetAdminUserPassword,
} from "../../helpers/axiosHelper";

const ResetPassword = () => {
  const [passwordForm, setPasswordForm] = useState("otp");
  const [resp, setResp] = useState({});
  const [userEmail, setUserEmail] = useState("");

  const handleOnOtpRequest = async (email) => {
    if (!email) {
      return alert("No email received");
    }
    setUserEmail(email);
    const response = await requestOtpresetAdminUserPassword({ email });
    setResp(response);
    response.status === "success" && setPasswordForm("password");
  };

  const handleOnPasswordUpdate = async (data) => {
    data.email = userEmail;
    const response = await resetAdminUserPassword(data);
    setResp(response);
  };

  const form = {
    otp: <RequestOTP handleOnOtpRequest={handleOnOtpRequest} />,
    password: (
      <ResetPasswordForm handleOnPasswordUpdate={handleOnPasswordUpdate} />
    ),
  };
  return (
    <div>
      <Header />
      <Container className="py-5 page-main">
        {resp.message && (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp.message}
          </Alert>
        )}
        <div className="pass-forms">{form[passwordForm]}</div>
      </Container>
      <Footer />
    </div>
  );
};

export default ResetPassword;
